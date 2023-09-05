import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-announce-create',
  templateUrl: './announce-create.component.html',
  styleUrls: ['./announce-create.component.css'],
})
export class AnnounceCreateComponent implements OnInit {
  constructor(private authservice: AuthService) {}
  ngOnInit(): void {}
  chat = faComment;
  showChat: boolean = false;
  userMessage: string = '';
  chatMessages: { sender: string; text: string }[] = [];
  dataaa: any = [];
  @ViewChild('chatMessages', { static: true }) chatMessagesRef!: ElementRef;
  isloading: boolean = true;
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
    console.log('Clicked Send Message');

    if (this.userMessage) {
      // console.log(this.userMessage);

      this.chatMessages.push({ sender: 'user', text: this.userMessage });

      this.authservice
        .chatbotResponse({ userrequest: this.userMessage })
        .subscribe((res) => {
          console.log('responce Recieved');
          console.log(res.message.content);

          console.log(res);
          this.isloading = false;
          this.chatMessages.push({
            sender: 'bot',
            text: `${res.message.content}`,
          });
          if (!res) {
            setTimeout(() => {
              console.log('Error In Backend Write again');
            }, 5000);
          }
          this.scrollToBottom();
        });

      this.userMessage = '';
      setTimeout(() => {
        this.scrollToBottom();
      });
    }
  }

  scrollToBottom() {
    const chatMessagesDiv = this.chatMessagesRef.nativeElement;
    chatMessagesDiv.scrollTop = chatMessagesDiv.scrollHeight;
  }
}
