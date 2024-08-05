import re
from .decorators import _handle_api_exceptions
from .openai_event_handler import EventHandler
from openai import OpenAI

class OpenAIClient:
    """
    Client for interacting with OpenAI's GPT API.
    Methods: load_assistant, create_vs_thread, create_thread, get_thread, delete_thread, create_message, stream_run
    """
    def __init__(self, config=None, api_key=None, assistant_id=None, VS_ID=None):
        self.config = config
        self.api_key = api_key
        self.assistant_id = assistant_id
        self.VS_ID = VS_ID
        self.client = OpenAI(api_key=self.api_key)

    @_handle_api_exceptions
    def load_assistant(self):
        """Load the OpenAI assistant."""
        assistant = self.client.beta.assistants.retrieve(self.assistant_id)
        return assistant

    @_handle_api_exceptions
    def create_vs_thread(self):
        """Create a new thread for interaction with the OpenAI assistant using a vector store."""
        thread = self.client.beta.threads.create(
            tool_resources={
                "file_search": {
                    "vector_store_ids": [self.VS_ID]
                }
            }
        )
        return thread

    @_handle_api_exceptions
    def create_thread(self):
        """Create a new thread for interaction with the OpenAI assistant."""
        thread = self.client.beta.threads.create()
        return thread

    @_handle_api_exceptions
    def get_thread(self, thread_id):
        """Retrieve the thread for interaction with the OpenAI assistant."""
        thread = self.client.beta.threads.retrieve(thread_id=thread_id)
        return thread

    @_handle_api_exceptions
    def delete_thread(self, thread_id):
        """Delete the thread."""
        self.client.beta.threads.delete(thread_id=thread_id)

    @_handle_api_exceptions
    def create_message(self, thread_id, content: str, role: str):
        """Create a new message in the thread with the specified content and role."""
        message = self.client.beta.threads.messages.create(thread_id=thread_id, content=content, role=role)
        return message

    @_handle_api_exceptions
    def stream_run(self, thread_id, assistant_id, task_instructions):
        """Stream the assistant's run process."""
        with self.client.beta.threads.runs.stream(
            thread_id=thread_id,
            assistant_id=assistant_id,
            instructions=task_instructions,
            event_handler=EventHandler()
            ) as stream:
                for delta in stream.text_deltas:
                    yield delta
