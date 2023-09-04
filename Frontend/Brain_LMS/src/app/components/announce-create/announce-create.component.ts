import { Component, ElementRef, ViewChild } from '@angular/core';
import { faComment } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-announce-create',
  templateUrl: './announce-create.component.html',
  styleUrls: ['./announce-create.component.css'],
})
export class AnnounceCreateComponent {
  chat = faComment;
  showChat: boolean = false;
  userMessage: string = '';
  chatMessages: { sender: string; text: string }[] = [];
  dataaa: any = [];
  @ViewChild('chatMessages', { static: true }) chatMessagesRef!: ElementRef;

  toggleChat() {
    this.showChat = !this.showChat;

    // Scroll to the bottom of the chat when it opens
    if (this.showChat) {
      setTimeout(() => {
        this.scrollToBottom();
      });
    }
  }

  sendMessage() {
    if (this.userMessage) {
      this.chatMessages.push({ sender: 'user', text: this.userMessage });

      // Simulate a bot response (you can replace this with actual chatbot logic)
      this.chatMessages.push({
        sender: 'bot',
        text: 'Hello! How can I assist you?',
      });

      this.userMessage = '';
      setTimeout(() => {
        this.scrollToBottom();
      });
    }
  }

  scrollToBottom() {
    const chatMessagesDiv: HTMLElement = this.chatMessagesRef.nativeElement;
    chatMessagesDiv.scrollTop = chatMessagesDiv.scrollHeight;
  }
}
