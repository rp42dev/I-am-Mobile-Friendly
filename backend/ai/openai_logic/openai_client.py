import re
from .openai_event_handler import EventHandler

class OpenAIAssistant:
    """A class for interacting with the OpenAI assistant."""

    def __init__(self, client):
        self.client = client

    def load_openai_assistant(self, assistant_id):
        """
        Load the OpenAI assistant.
        """
        assistant = self.client.beta.assistants.retrieve(assistant_id)
        return assistant

    def create_openai_thread(self, vs_ID):
        """
        Create a new thread for interaction with the OpenAI assistant.
        """
        thread = self.client.beta.threads.create(
            tool_resources={
                "file_search": {
                    "vector_store_ids": [vs_ID]
                }
            }
        )
        return thread

    def get_openai_thread(self, thread_id):
        """
        Retrieve the thread for interaction with the OpenAI assistant.
        """
        thread = self.client.beta.threads.retrieve(thread_id)
       
        return thread

    def delete_thread(self, thread_id):
        """
        Delete the thread.
        """
        try:
            self.client.beta.threads.delete(thread_id=thread_id)
        except Exception as e:
            print(f"Error deleting thread: {e}")
            pass
        
    def create_message(self, thread_id: str, content: str, role: str):
        """Create a new message in the thread with the specified content and role."""
        message = self.client.beta.threads.messages.create(thread_id=thread_id, content=content, role=role)
        return message
    
    def stream_run(self, thread_id: str, assistant_id: str, task_instructions: str):
        """Stream the assistant's run process."""
        def strip_text(text):
            """Strip the text of any square brackets."""
            return re.sub(r'\【.*\】', '', text)

        with self.client.beta.threads.runs.stream(
            thread_id=thread_id, 
            assistant_id=assistant_id, 
            
            event_handler=EventHandler()
            ) as stream:
                for delta in stream.text_deltas:
                    clean_text = strip_text(delta)
                    yield clean_text

    def get_assistant_response(self, thread, assistant_id, userInput):
        """
        Interact with the assistant by sending user input and retrieving the response.
        """
        message = self.create_message(thread.id, userInput, "user")

        delta = self.stream_run(thread.id, assistant_id, 'process user input')
        
        return delta
