import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.sass'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class MyworkComponent {
  isVisible = false;
  isFullyHidden = true;

  projects = [
    {
      title: 'Join',
      livetest: 'https://join.johannholm.de',
      img: 'join.png',
      devLanguage: 'JavaScript | HTML | CSS',
      description:
        'Task manager inspired by the Kanban System, Create and organize tasks using drag and drop functions, assign users and categories.',
      github: 'https://github.com/JohannHolm/Join',
    },
    {
      title: 'Sharkie',
      livetest: 'https://sharkie.johannholm.de',
      img: 'sharkie.png',
      devLanguage: 'JavaScript | HTML | CSS',
      description:
        'Navigate the underwater world as Sharkie. Overcome enemies, avoid dangers, and collect coins in a straightforward aquatic adventure. Face the endboss in a simple battle of wit and reflexes.',
      github: 'https://github.com/JohannHolm/sharkie',
    },
    {
      title: 'OneMoment',
      livetest: 'https://shop.johannholm.de/',
      img: 'onemoment.jpg',
      devLanguage: 'Web Design | Astro',
      description:
        'A bridal fashion website presenting curated collections, its atelier, and a personal appointment experience.',
      github: 'https://github.com/JohannHolm/bridal_fashion',
    },
  ];
}
