import { Component } from '@angular/core';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.sass'],
})
export class MyworkComponent {
  isVisible = false;
  isFullyHidden = true;

  projects = [
    {
      title: 'Join',
      livetest: 'https://johannholm.de/Join/',
      img: 'join.png',
      devLanguage: 'JavaScript | HTML | CSS',
      description:
        'Task manager inspired by the Kanban System, Create and organize tasks using drag and drop functions, assign users and categories.',
      github: 'https://github.com/JohannHolm/Join',
    },
    {
      title: 'Sharkie',
      livetest: 'https://johannholm.de/Sharkie/',
      img: 'sharkie.png',
      devLanguage: 'JavaScript | HTML | CSS',
      description:
        'Navigate the underwater world as Sharkie. Overcome enemies, avoid dangers, and collect coins in a straightforward aquatic adventure. Face the endboss in a simple battle of wit and reflexes.',
      github: 'https://github.com/JohannHolm/sharkie',
    },
    {
      title: 'Placeholder',
      livetest: '#',
      img: 'sharkie.png',
      devLanguage: 'Placeholder',
      description: 'Placeholder.',
      github: '#',
    },
  ];
}
