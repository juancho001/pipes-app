import { heroes } from './../../data/heroes.data';
import { Component, signal } from '@angular/core';
import { toggleCasePipe } from '../../pipes/toggle-case.pipe';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { heroColorPipe } from '../../pipes/heroColor.pipe';
import { heroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { heroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { heroSortByPipe } from '../../pipes/hero-sort.by.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { HeroFilterPipe } from '../../pipes/hero.filter.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [toggleCasePipe,CanFlyPipe,heroColorPipe,heroTextColorPipe,heroCreatorPipe,heroSortByPipe,HeroFilterPipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name =   signal('juan carlos avila meza');
  upperCase = signal(true);
  heroes = signal(heroes);
  sortBy = signal<keyof Hero | null>(null)
  searchQuery = signal('')

}
