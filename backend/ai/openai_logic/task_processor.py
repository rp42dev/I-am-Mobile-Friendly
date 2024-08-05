class MessageProcessor:
    """
    Class to process messages and tasks.
    Methods: process_message, process_task, get_assistant_response
    """
    def __init__(self, client, thread):
        self.client = client
        self.thread = thread

    def process_message(self, user_input: str):
        """Method to process the message."""
        self.client.create_message(self.thread.id, user_input, "user")

    def process_task(self, groups: str, group: str, user_input: str):
        """Method to process the selected task."""
        task_name = user_input
        task_instructions = self.client.config[groups][group][user_input]['instructions']
        print(f"\nProcessing task: {task_name}")

        self.client.stream_run(self.thread.id, self.client.get_assistant().id, task_instructions)
    
    def get_assistant_response(self, user_input: str):
        """Interact with the assistant by sending user input and retrieving the response."""
        self.process_message(user_input)
        delta = self.client.stream_run(self.thread.id, self.client.assistant_id, "")

        return delta
