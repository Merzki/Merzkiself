import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  copiedValue: string | null = null;

  contactMethods = [
    { label: 'Email', value: 'merzkiii33@gmail.com', icon: 'mail', link: 'mailto:merzkiii33@gmail.com' },
    { label: 'Telegram', value: '@biwbawbow', icon: 'telegram', link: 'https://t.me/biwbawbow' },
    { label: 'Linkedin', value: 'Anton Shurmei', icon: 'linkedin', link: 'https://www.linkedin.com/in/anton-shurmei-63668b356/' },
    { label: 'Dev', value: 'merzki', icon: 'dev', link: 'https://dev.to/merzki' },
    { label: 'GitHub', value: 'Merzki', icon: 'github', link: 'https://github.com/Merzki' }
  ];

  copyToClipboard(value: string) {
    navigator.clipboard.writeText(value).then(() => {
      this.copiedValue = value;
      setTimeout(() => this.copiedValue = null, 2000);
    });
  }

  openPaypal() {
    window.open('https://paypal.me/shurmeia', '_blank');
  }
}
