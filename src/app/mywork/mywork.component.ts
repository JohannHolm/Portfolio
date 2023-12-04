import { Component } from '@angular/core';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.sass'],
})
export class MyworkComponent {
  projects = [
    {
      title: 'Join',
      livetest: '#',
      img: 'join.png',
      devLanguage: 'JavaScript | HTML | CSS',
      description:
        'Task manager inspired by the Kanban System, Create and organize tasks using drag and drop functions, assign users and categories.',
      github: '#',
    },
    {
      title: 'Sharkie',
      livetest: '#',
      img: 'sharkie.png',
      devLanguage: 'JavaScript | HTML | CSS',
      description:
        'Navigate the underwater world as Sharkie. Overcome enemies, avoid dangers, and collect coins in a straightforward aquatic adventure. Face the endboss in a simple battle of wit and reflexes.',
      github: '#',
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
