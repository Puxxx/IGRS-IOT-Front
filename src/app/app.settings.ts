import {Injectable} from '@angular/core';
import {Settings} from './app.settings.model';

@Injectable()
export class AppSettings {
  public settings = new Settings(
    'IGRS',
    true,
    true,
    true,
    false,
    false,
    true,
    true,
    'vertical', // horizontal , vertical
    'default',  // default, compact, mini
    'indigo-light', // indigo-light, teal-light, red-light, gray-light, blue-dark, green-dark, pink-dark, gray-dark
    false, // true = rtl, false = ltr
  );
}

