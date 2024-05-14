
import time
import re

class OpenAIAssistant:
    """A class for interacting with the OpenAI assistant."""

    def __init__(self, client):
        """
        Initialize the OpenAIAssistant object.

        Parameters:
        - client: OpenAI client object.
        """
        self.client = client

    def load_openai_assistant(self, assistant_id):
        """
        Load the OpenAI assistant.

        Parameters:
        - assistant_id (str): ID of the OpenAI assistant.

        Returns:
        - assistant: Loaded OpenAI assistant object.
        """
        assistant = self.client.beta.assistants.retrieve(assistant_id)
        return assistant

    def create_openai_thread(self, vs_ID):
        """
        Create a new thread for interaction with the OpenAI assistant.

        Parameters:
        - vs_ID (str): ID of the vector store.

        Returns:
        - thread: Created thread object.
        """
        thread = self.client.beta.threads.create(
            tool_resources={
                "file_search": {
                    "vector_store_ids": [vs_ID]
                }
            }
        )
        return thread

    def delete_thread(self, thread_id):
        """
        Delete the thread.

        Parameters:
        - thread_id (str): ID of the thread to be deleted.
        """
        try:
            self.client.beta.threads.delete(thread_id=thread_id)
        except Exception as e:
            print(f"Error deleting thread: {e}")
            pass

    def wait_on_run(self, run, thread):
        """
        Wait for the assistant run to complete or progress to the next stage.

        Parameters:
        - run: Run object.
        - thread: Thread object.

        Returns:
        - run: Updated run object.
        """
        idx = 0
        while run.status == "queued" or run.status == "in_progress":
            print(f"Waiting for assistant response{'.' * idx}", end="\r")
            idx = (idx + 1) % 4
            run = self.client.beta.threads.runs.retrieve(
                thread_id=thread.id,
                run_id=run.id,
            )
            time.sleep(0.5)
        return run

    def get_assistant_response(self, thread, assistant_id, userInput):
        """
        Interact with the assistant by sending user input and retrieving the response.

        Parameters:
        - thread: Thread object.
        - assistant_id (str): ID of the OpenAI assistant.
        - userInput (str): User input to the assistant.

        Returns:
        - str: Response from the assistant.
        """
        message = self.client.beta.threads.messages.create(
            thread_id=thread.id,
            role="user",
            content=userInput,
        )

        run = self.client.beta.threads.runs.create(
            thread_id=thread.id,
            assistant_id=assistant_id,
        )

        run = self.wait_on_run(run, thread)

        messages = self.client.beta.threads.messages.list(
            thread_id=thread.id, order="asc", after=message.id
        )
        try:
            text = messages.data[0].content[0].text.value
            # Remove any text within square brackets 【】
            clean_text = re.sub(r'\【.*\】', '', text)
            return clean_text
        except IndexError:
            return "No response from the assistant, please try again."
