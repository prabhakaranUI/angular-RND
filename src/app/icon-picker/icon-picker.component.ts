import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Observable} from 'rxjs';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { MatSelect } from '@angular/material/select';

interface MaterialIconModel {
    name: string;
    version: number;
    popularity: number;
    codepoint: number;
    // tslint:disable-next-line:variable-name
    unsupported_families: string[];
    categories: string[];
    tags: string[];
    // tslint:disable-next-line:variable-name
    sizes_px: number[];
}
@Component({
  selector: 'app-icon-picker',
  templateUrl: './icon-picker.component.html',
  styleUrls: ['./icon-picker.component.scss']
})
export class IconPickerComponent implements OnInit,  AfterViewInit, OnDestroy {
    iconData: MaterialIconModel[] = [
        {
            name: '10k',
            version: 8,
            popularity: 181,
            codepoint: 59729,
            unsupported_families: [],
            categories: ['av'],
            tags: ['10000', '10K', 'alphabet', 'character', 'digit', 'display', 'font', 'letter', 'number', 'pixel', 'pixels', 'resolution', 'symbol', 'text', 'type', 'video'],
            sizes_px: [24]
        }, {
            name: '10mp',
            version: 8,
            popularity: 86,
            codepoint: 59730,
            unsupported_families: [],
            categories: ['image'],
            tags: ['10', 'camera', 'digits', 'font', 'image', 'letters', 'megapixel', 'megapixels', 'mp', 'numbers', 'pixel', 'pixels', 'quality', 'resolution', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: '11mp',
            version: 8,
            popularity: 88,
            codepoint: 59731,
            unsupported_families: [],
            categories: ['image'],
            tags: ['11', 'camera', 'digits', 'font', 'image', 'letters', 'megapixel', 'megapixels', 'mp', 'numbers', 'pixel', 'pixels', 'quality', 'resolution', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: '12mp',
            version: 8,
            popularity: 111,
            codepoint: 59732,
            unsupported_families: [],
            categories: ['image'],
            tags: ['12', 'camera', 'digits', 'font', 'image', 'letters', 'megapixel', 'megapixels', 'mp', 'numbers', 'pixel', 'pixels', 'quality', 'resolution', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: '13mp',
            version: 8,
            popularity: 91,
            codepoint: 59733,
            unsupported_families: [],
            categories: ['image'],
            tags: ['13', 'camera', 'digits', 'font', 'image', 'letters', 'megapixel', 'megapixels', 'mp', 'numbers', 'pixel', 'pixels', 'quality', 'resolution', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: '14mp',
            version: 8,
            popularity: 85,
            codepoint: 59734,
            unsupported_families: [],
            categories: ['image'],
            tags: ['14', 'camera', 'digits', 'font', 'image', 'letters', 'megapixel', 'megapixels', 'mp', 'numbers', 'pixel', 'pixels', 'quality', 'resolution', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: '15mp',
            version: 8,
            popularity: 83,
            codepoint: 59735,
            unsupported_families: [],
            categories: ['image'],
            tags: ['15', 'camera', 'digits', 'font', 'image', 'letters', 'megapixel', 'megapixels', 'mp', 'numbers', 'pixel', 'pixels', 'quality', 'resolution', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: '16mp',
            version: 8,
            popularity: 91,
            codepoint: 59736,
            unsupported_families: [],
            categories: ['image'],
            tags: ['16', 'camera', 'digits', 'font', 'image', 'letters', 'megapixel', 'megapixels', 'mp', 'numbers', 'pixel', 'pixels', 'quality', 'resolution', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: '17mp',
            version: 8,
            popularity: 81,
            codepoint: 59737,
            unsupported_families: [],
            categories: ['image'],
            tags: ['17', 'camera', 'digits', 'font', 'image', 'letters', 'megapixel', 'megapixels', 'mp', 'numbers', 'pixel', 'pixels', 'quality', 'resolution', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: '18mp',
            version: 8,
            popularity: 97,
            codepoint: 59738,
            unsupported_families: [],
            categories: ['image'],
            tags: ['18', 'camera', 'digits', 'font', 'image', 'letters', 'megapixel', 'megapixels', 'mp', 'numbers', 'pixel', 'pixels', 'quality', 'resolution', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: '19mp',
            version: 8,
            popularity: 88,
            codepoint: 59739,
            unsupported_families: [],
            categories: ['image'],
            tags: ['19', 'camera', 'digits', 'font', 'image', 'letters', 'megapixel', 'megapixels', 'mp', 'numbers', 'pixel', 'pixels', 'quality', 'resolution', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: '1k',
            version: 8,
            popularity: 124,
            codepoint: 59740,
            unsupported_families: [],
            categories: ['av'],
            tags: ['1000', '1K', 'alphabet', 'character', 'digit', 'display', 'font', 'letter', 'number', 'pixel', 'pixels', 'resolution', 'symbol', 'text', 'type', 'video'],
            sizes_px: [24]
        }, {
            name: '1k_plus',
            version: 8,
            popularity: 110,
            codepoint: 59741,
            unsupported_families: [],
            categories: ['av'],
            tags: ['+', '1000', '1K', 'alphabet', 'character', 'digit', 'display', 'font', 'letter', 'number', 'pixel', 'pixels', 'plus', 'resolution', 'symbol', 'text', 'type', 'video'],
            sizes_px: [24]
        }, {
            name: '1x_mobiledata',
            version: 7,
            popularity: 207,
            codepoint: 61389,
            unsupported_families: [],
            categories: ['device'],
            tags: ['1x', 'alphabet', 'cellular', 'character', 'digit', 'font', 'letter', 'mobile', 'mobiledata', 'network', 'number', 'phone', 'signal', 'speed', 'symbol', 'text', 'type', 'wifi'],
            sizes_px: [24]
        }, {
            name: '20mp',
            version: 8,
            popularity: 97,
            codepoint: 59742,
            unsupported_families: [],
            categories: ['image'],
            tags: ['20', 'camera', 'digits', 'font', 'image', 'letters', 'megapixel', 'megapixels', 'mp', 'numbers', 'pixel', 'pixels', 'quality', 'resolution', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: '21mp',
            version: 8,
            popularity: 88,
            codepoint: 59743,
            unsupported_families: [],
            categories: ['image'],
            tags: ['21', 'camera', 'digits', 'font', 'image', 'letters', 'megapixel', 'megapixels', 'mp', 'numbers', 'pixel', 'pixels', 'quality', 'resolution', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: '22mp',
            version: 8,
            popularity: 89,
            codepoint: 59744,
            unsupported_families: [],
            categories: ['image'],
            tags: ['22', 'camera', 'digits', 'font', 'image', 'letters', 'megapixel', 'megapixels', 'mp', 'numbers', 'pixel', 'pixels', 'quality', 'resolution', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: '23mp',
            version: 8,
            popularity: 112,
            codepoint: 59745,
            unsupported_families: [],
            categories: ['image'],
            tags: ['23', 'camera', 'digits', 'font', 'image', 'letters', 'megapixel', 'megapixels', 'mp', 'numbers', 'pixel', 'pixels', 'quality', 'resolution', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: '24mp',
            version: 8,
            popularity: 175,
            codepoint: 59746,
            unsupported_families: [],
            categories: ['image'],
            tags: ['24', 'camera', 'digits', 'font', 'image', 'letters', 'megapixel', 'megapixels', 'mp', 'numbers', 'pixel', 'pixels', 'quality', 'resolution', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: '2k',
            version: 8,
            popularity: 139,
            codepoint: 59747,
            unsupported_families: [],
            categories: ['av'],
            tags: ['2000', '2K', 'alphabet', 'character', 'digit', 'display', 'font', 'letter', 'number', 'pixel', 'pixels', 'resolution', 'symbol', 'text', 'type', 'video'],
            sizes_px: [24]
        }, {
            name: '2k_plus',
            version: 8,
            popularity: 102,
            codepoint: 59748,
            unsupported_families: [],
            categories: ['av'],
            tags: ['+', '2k', 'alphabet', 'character', 'digit', 'font', 'letter', 'number', 'plus', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: '2mp',
            version: 8,
            popularity: 81,
            codepoint: 59749,
            unsupported_families: [],
            categories: ['image'],
            tags: ['2', 'camera', 'digit', 'font', 'image', 'letters', 'megapixel', 'megapixels', 'mp', 'number', 'pixel', 'pixels', 'quality', 'resolution', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: '30fps',
            version: 8,
            popularity: 202,
            codepoint: 61390,
            unsupported_families: [],
            categories: ['device'],
            tags: ['30fps', 'alphabet', 'camera', 'character', 'digit', 'font', 'fps', 'frames', 'letter', 'number', 'symbol', 'text', 'type', 'video'],
            sizes_px: [24]
        }, {
            name: '30fps_select',
            version: 8,
            popularity: 139,
            codepoint: 61391,
            unsupported_families: [],
            categories: ['image'],
            tags: ['30', 'camera', 'digits', 'fps', 'frame', 'frequency', 'image', 'numbers', 'per', 'rate', 'second', 'seconds', 'select', 'video'],
            sizes_px: [24]
        }, {
            name: '360',
            version: 12,
            popularity: 980,
            codepoint: 58743,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['360', 'arrow', 'av', 'camera', 'direction', 'rotate', 'rotation', 'vr'],
            sizes_px: [24]
        }, {
            name: '3d_rotation',
            version: 15,
            popularity: 4001,
            codepoint: 59469,
            unsupported_families: [],
            categories: ['action'],
            tags: ['3', '3d', 'D', 'alphabet', 'arrow', 'arrows', 'av', 'camera', 'character', 'digit', 'font', 'letter', 'number', 'rotation', 'symbol', 'text', 'type', 'vr'],
            sizes_px: [24]
        }, {
            name: '3g_mobiledata',
            version: 7,
            popularity: 158,
            codepoint: 61392,
            unsupported_families: [],
            categories: ['device'],
            tags: ['3g', 'alphabet', 'cellular', 'character', 'digit', 'font', 'letter', 'mobile', 'mobiledata', 'network', 'number', 'phone', 'signal', 'speed', 'symbol', 'text', 'type', 'wifi'],
            sizes_px: [24]
        }, {
            name: '3k',
            version: 8,
            popularity: 103,
            codepoint: 59750,
            unsupported_families: [],
            categories: ['av'],
            tags: ['3000', '3K', 'alphabet', 'character', 'digit', 'display', 'font', 'letter', 'number', 'pixel', 'pixels', 'resolution', 'symbol', 'text', 'type', 'video'],
            sizes_px: [24]
        }, {
            name: '3k_plus',
            version: 8,
            popularity: 108,
            codepoint: 59751,
            unsupported_families: [],
            categories: ['av'],
            tags: ['+', '3000', '3K', 'alphabet', 'character', 'digit', 'display', 'font', 'letter', 'number', 'pixel', 'pixels', 'plus', 'resolution', 'symbol', 'text', 'type', 'video'],
            sizes_px: [24]
        }, {
            name: '3mp',
            version: 8,
            popularity: 90,
            codepoint: 59752,
            unsupported_families: [],
            categories: ['image'],
            tags: ['3', 'camera', 'digit', 'font', 'image', 'letters', 'megapixel', 'megapixels', 'mp', 'number', 'pixel', 'pixels', 'quality', 'resolution', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: '3p',
            version: 9,
            popularity: 831,
            codepoint: 61393,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['3', '3p', 'account', 'avatar', 'bubble', 'chat', 'comment', 'communicate', 'face', 'human', 'message', 'party', 'people', 'person', 'profile', 'speech', 'user'],
            sizes_px: [24]
        }, {
            name: '4g_mobiledata',
            version: 7,
            popularity: 271,
            codepoint: 61394,
            unsupported_families: [],
            categories: ['device'],
            tags: ['4g', 'alphabet', 'cellular', 'character', 'digit', 'font', 'letter', 'mobile', 'mobiledata', 'network', 'number', 'phone', 'signal', 'speed', 'symbol', 'text', 'type', 'wifi'],
            sizes_px: [24]
        }, {
            name: '4g_plus_mobiledata',
            version: 7,
            popularity: 181,
            codepoint: 61395,
            unsupported_families: [],
            categories: ['device'],
            tags: ['4g', 'alphabet', 'cellular', 'character', 'digit', 'font', 'letter', 'mobile', 'mobiledata', 'network', 'number', 'phone', 'plus', 'signal', 'speed', 'symbol', 'text', 'type', 'wifi'],
            sizes_px: [24]
        }, {
            name: '4k',
            version: 9,
            popularity: 240,
            codepoint: 57458,
            unsupported_families: [],
            categories: ['av'],
            tags: ['4000', '4K', 'alphabet', 'character', 'digit', 'display', 'font', 'letter', 'number', 'pixel', 'pixels', 'resolution', 'symbol', 'text', 'type', 'video'],
            sizes_px: [24]
        }, {
            name: '4k_plus',
            version: 8,
            popularity: 148,
            codepoint: 59753,
            unsupported_families: [],
            categories: ['av'],
            tags: ['+', '4000', '4K', 'alphabet', 'character', 'digit', 'display', 'font', 'letter', 'number', 'pixel', 'pixels', 'plus', 'resolution', 'symbol', 'text', 'type', 'video'],
            sizes_px: [24]
        }, {
            name: '4mp',
            version: 8,
            popularity: 79,
            codepoint: 59754,
            unsupported_families: [],
            categories: ['image'],
            tags: ['4', 'camera', 'digit', 'font', 'image', 'letters', 'megapixel', 'megapixels', 'mp', 'number', 'pixel', 'pixels', 'quality', 'resolution', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: '5g',
            version: 11,
            popularity: 393,
            codepoint: 61240,
            unsupported_families: [],
            categories: ['av'],
            tags: ['5g', 'alphabet', 'cellular', 'character', 'data', 'digit', 'font', 'letter', 'mobile', 'network', 'number', 'phone', 'signal', 'speed', 'symbol', 'text', 'type', 'wifi'],
            sizes_px: [20, 24]
        }, {
            name: '5k',
            version: 8,
            popularity: 106,
            codepoint: 59755,
            unsupported_families: [],
            categories: ['av'],
            tags: ['5000', '5K', 'alphabet', 'character', 'digit', 'display', 'font', 'letter', 'number', 'pixel', 'pixels', 'resolution', 'symbol', 'text', 'type', 'video'],
            sizes_px: [24]
        }, {
            name: '5k_plus',
            version: 8,
            popularity: 110,
            codepoint: 59756,
            unsupported_families: [],
            categories: ['av'],
            tags: ['+', '5000', '5K', 'alphabet', 'character', 'digit', 'display', 'font', 'letter', 'number', 'pixel', 'pixels', 'plus', 'resolution', 'symbol', 'text', 'type', 'video'],
            sizes_px: [24]
        }, {
            name: '5mp',
            version: 8,
            popularity: 81,
            codepoint: 59757,
            unsupported_families: [],
            categories: ['image'],
            tags: ['5', 'camera', 'digit', 'font', 'image', 'letters', 'megapixel', 'megapixels', 'mp', 'number', 'pixel', 'pixels', 'quality', 'resolution', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: '60fps',
            version: 8,
            popularity: 188,
            codepoint: 61396,
            unsupported_families: [],
            categories: ['device'],
            tags: ['60fps', 'camera', 'digit', 'fps', 'frames', 'number', 'symbol', 'video'],
            sizes_px: [24]
        }, {
            name: '60fps_select',
            version: 8,
            popularity: 139,
            codepoint: 61397,
            unsupported_families: [],
            categories: ['image'],
            tags: ['60', 'camera', 'digits', 'fps', 'frame', 'frequency', 'numbers', 'per', 'rate', 'second', 'seconds', 'select', 'video'],
            sizes_px: [24]
        }, {
            name: '6_ft_apart',
            version: 7,
            popularity: 490,
            codepoint: 61982,
            unsupported_families: [],
            categories: ['social'],
            tags: ['6', 'apart', 'body', 'covid', 'distance', 'feet', 'ft', 'human', 'people', 'person', 'social'],
            sizes_px: [24]
        }, {
            name: '6k',
            version: 8,
            popularity: 100,
            codepoint: 59758,
            unsupported_families: [],
            categories: ['av'],
            tags: ['6000', '6K', 'alphabet', 'character', 'digit', 'display', 'font', 'letter', 'number', 'pixel', 'pixels', 'resolution', 'symbol', 'text', 'type', 'video'],
            sizes_px: [24]
        }, {
            name: '6k_plus',
            version: 8,
            popularity: 110,
            codepoint: 59759,
            unsupported_families: [],
            categories: ['av'],
            tags: ['+', '6000', '6K', 'alphabet', 'character', 'digit', 'display', 'font', 'letter', 'number', 'pixel', 'pixels', 'plus', 'resolution', 'symbol', 'text', 'type', 'video'],
            sizes_px: [24]
        }, {
            name: '6mp',
            version: 8,
            popularity: 94,
            codepoint: 59760,
            unsupported_families: [],
            categories: ['image'],
            tags: ['6', 'camera', 'digit', 'font', 'image', 'letters', 'megapixel', 'megapixels', 'mp', 'number', 'pixel', 'pixels', 'quality', 'resolution', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: '7k',
            version: 8,
            popularity: 102,
            codepoint: 59761,
            unsupported_families: [],
            categories: ['av'],
            tags: ['7000', '7K', 'alphabet', 'character', 'digit', 'display', 'font', 'letter', 'number', 'pixel', 'pixels', 'resolution', 'symbol', 'text', 'type', 'video'],
            sizes_px: [24]
        }, {
            name: '7k_plus',
            version: 8,
            popularity: 104,
            codepoint: 59762,
            unsupported_families: [],
            categories: ['av'],
            tags: ['+', '7000', '7K', 'alphabet', 'character', 'digit', 'display', 'font', 'letter', 'number', 'pixel', 'pixels', 'plus', 'resolution', 'symbol', 'text', 'type', 'video'],
            sizes_px: [24]
        }, {
            name: '7mp',
            version: 8,
            popularity: 83,
            codepoint: 59763,
            unsupported_families: [],
            categories: ['image'],
            tags: ['7', 'camera', 'digit', 'font', 'image', 'letters', 'megapixel', 'megapixels', 'mp', 'number', 'pixel', 'pixels', 'quality', 'resolution', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: '8k',
            version: 9,
            popularity: 117,
            codepoint: 59764,
            unsupported_families: [],
            categories: ['av'],
            tags: ['8000', '8K', 'alphabet', 'character', 'digit', 'display', 'font', 'letter', 'number', 'pixel', 'pixels', 'resolution', 'symbol', 'text', 'type', 'video'],
            sizes_px: [24]
        }, {
            name: '8k_plus',
            version: 9,
            popularity: 106,
            codepoint: 59765,
            unsupported_families: [],
            categories: ['av'],
            tags: ['+', '7000', '8K', 'alphabet', 'character', 'digit', 'display', 'font', 'letter', 'number', 'pixel', 'pixels', 'plus', 'resolution', 'symbol', 'text', 'type', 'video'],
            sizes_px: [24]
        }, {
            name: '8mp',
            version: 8,
            popularity: 84,
            codepoint: 59766,
            unsupported_families: [],
            categories: ['image'],
            tags: ['8', 'camera', 'digit', 'font', 'image', 'letters', 'megapixel', 'megapixels', 'mp', 'number', 'pixel', 'pixels', 'quality', 'resolution', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: '9k',
            version: 8,
            popularity: 116,
            codepoint: 59767,
            unsupported_families: [],
            categories: ['av'],
            tags: ['9000', '9K', 'alphabet', 'character', 'digit', 'display', 'font', 'letter', 'number', 'pixel', 'pixels', 'resolution', 'symbol', 'text', 'type', 'video'],
            sizes_px: [24]
        }, {
            name: '9k_plus',
            version: 8,
            popularity: 120,
            codepoint: 59768,
            unsupported_families: [],
            categories: ['av'],
            tags: ['+', '9000', '9K', 'alphabet', 'character', 'digit', 'display', 'font', 'letter', 'number', 'pixel', 'pixels', 'plus', 'resolution', 'symbol', 'text', 'type', 'video'],
            sizes_px: [24]
        }, {
            name: '9mp',
            version: 8,
            popularity: 80,
            codepoint: 59769,
            unsupported_families: [],
            categories: ['image'],
            tags: ['9', 'camera', 'digit', 'font', 'image', 'letters', 'megapixel', 'megapixels', 'mp', 'number', 'pixel', 'pixels', 'quality', 'resolution', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'ac_unit',
            version: 10,
            popularity: 1841,
            codepoint: 60219,
            unsupported_families: [],
            categories: ['places'],
            tags: ['ac', 'air', 'cold', 'conditioner', 'flake', 'snow', 'temperature', 'unit', 'weather', 'winter'],
            sizes_px: [24]
        }, {
            name: 'access_alarm',
            version: 10,
            popularity: 259,
            codepoint: 57744,
            unsupported_families: [],
            categories: ['device'],
            tags: [],
            sizes_px: [24]
        }, {
            name: 'access_alarms',
            version: 10,
            popularity: 311,
            codepoint: 57745,
            unsupported_families: [],
            categories: ['device'],
            tags: [],
            sizes_px: [24]
        }, {
            name: 'access_time',
            version: 10,
            popularity: 1382,
            codepoint: 57746,
            unsupported_families: [],
            categories: ['device'],
            tags: [],
            sizes_px: [24]
        }, {
            name: 'access_time_filled',
            version: 8,
            popularity: 591,
            codepoint: 61398,
            unsupported_families: [],
            categories: ['device'],
            tags: [],
            sizes_px: [24]
        }, {
            name: 'accessibility',
            version: 10,
            popularity: 6374,
            codepoint: 59470,
            unsupported_families: [],
            categories: ['action'],
            tags: ['accessibility', 'accessible', 'body', 'handicap', 'help', 'human', 'people', 'person'],
            sizes_px: [24]
        }, {
            name: 'accessibility_new',
            version: 10,
            popularity: 4372,
            codepoint: 59692,
            unsupported_families: [],
            categories: ['action'],
            tags: ['accessibility', 'accessible', 'body', 'handicap', 'help', 'human', 'people', 'person'],
            sizes_px: [24]
        }, {
            name: 'accessible',
            version: 11,
            popularity: 1905,
            codepoint: 59668,
            unsupported_families: [],
            categories: ['action'],
            tags: ['accessibility', 'accessible', 'body', 'handicap', 'help', 'human', 'people', 'person', 'wheelchair'],
            sizes_px: [24]
        }, {
            name: 'accessible_forward',
            version: 11,
            popularity: 1240,
            codepoint: 59700,
            unsupported_families: [],
            categories: ['action'],
            tags: ['accessibility', 'accessible', 'body', 'forward', 'handicap', 'help', 'human', 'people', 'person', 'wheelchair'],
            sizes_px: [24]
        }, {
            name: 'account_balance',
            version: 14,
            popularity: 11479,
            codepoint: 59471,
            unsupported_families: [],
            categories: ['action'],
            tags: ['account', 'balance', 'bank', 'bill', 'card', 'cash', 'coin', 'commerce', 'credit', 'currency', 'dollars', 'finance', 'money', 'online', 'pay', 'payment'],
            sizes_px: [24]
        }, {
            name: 'account_balance_wallet',
            version: 10,
            popularity: 7299,
            codepoint: 59472,
            unsupported_families: [],
            categories: ['action'],
            tags: ['account', 'balance', 'bank', 'bill', 'card', 'cash', 'coin', 'commerce', 'credit', 'currency', 'dollars', 'finance', 'money', 'online', 'pay', 'payment', 'wallet'],
            sizes_px: [24]
        }, {
            name: 'account_box',
            version: 10,
            popularity: 5556,
            codepoint: 59473,
            unsupported_families: [],
            categories: ['action'],
            tags: ['account', 'avatar', 'box', 'face', 'human', 'people', 'person', 'profile', 'square', 'thumbnail', 'user'],
            sizes_px: [24]
        }, {
            name: 'account_circle',
            version: 12,
            popularity: 59042,
            codepoint: 59475,
            unsupported_families: [],
            categories: ['action'],
            tags: ['account', 'avatar', 'circle', 'face', 'human', 'people', 'person', 'profile', 'thumbnail', 'user'],
            sizes_px: [24]
        }, {
            name: 'account_tree',
            version: 10,
            popularity: 4343,
            codepoint: 59770,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['account', 'analytics', 'chart', 'connect', 'data', 'diagram', 'flow', 'graph', 'infographic', 'measure', 'metrics', 'process', 'square', 'statistics', 'structure', 'tracking', 'tree'],
            sizes_px: [24]
        }, {
            name: 'ad_units',
            version: 11,
            popularity: 360,
            codepoint: 61241,
            unsupported_families: [],
            categories: ['device'],
            tags: ['Android', 'OS', 'ad', 'banner', 'cell', 'device', 'hardware', 'iOS', 'mobile', 'notification', 'notifications', 'phone', 'tablet', 'top', 'units'],
            sizes_px: [24]
        }, {
            name: 'adb',
            version: 10,
            popularity: 459,
            codepoint: 58894,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['adb', 'android', 'bridge', 'debug'],
            sizes_px: [24]
        }, {
            name: 'add',
            version: 13,
            popularity: 35469,
            codepoint: 57669,
            unsupported_families: [],
            categories: ['content'],
            tags: ['+', 'add', 'create', 'new', 'new symbol', 'plus', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'add_a_photo',
            version: 12,
            popularity: 3851,
            codepoint: 58425,
            unsupported_families: [],
            categories: ['image'],
            tags: ['+', 'a photo', 'add', 'camera', 'lens', 'new', 'photography', 'picture', 'plus', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'add_alarm',
            version: 11,
            popularity: 181,
            codepoint: 57747,
            unsupported_families: [],
            categories: ['device'],
            tags: [],
            sizes_px: [24]
        }, {
            name: 'add_alert',
            version: 13,
            popularity: 940,
            codepoint: 57347,
            unsupported_families: [],
            categories: ['alert'],
            tags: ['+', 'active', 'add', 'alarm', 'alert', 'bell', 'chime', 'new', 'notifications', 'notify', 'plus', 'reminder', 'ring', 'sound', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'add_box',
            version: 11,
            popularity: 4206,
            codepoint: 57670,
            unsupported_families: [],
            categories: ['content'],
            tags: ['add', 'box', 'new square', 'plus', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'add_business',
            version: 12,
            popularity: 947,
            codepoint: 59177,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['+', 'add', 'business', 'market', 'plus', 'retail', 'shop', 'shopping', 'store', 'storefront'],
            sizes_px: [20, 24]
        }, {
            name: 'add_chart',
            version: 8,
            popularity: 544,
            codepoint: 59771,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['+', 'add', 'analytics', 'bar', 'bars', 'chart', 'data', 'diagram', 'graph', 'infographic', 'measure', 'metrics', 'new', 'plus', 'statistics', 'symbol', 'tracking'],
            sizes_px: [24]
        }, {
            name: 'add_circle',
            version: 11,
            popularity: 13832,
            codepoint: 57671,
            unsupported_families: [],
            categories: ['content'],
            tags: ['+', 'add', 'circle', 'create', 'new', 'plus'],
            sizes_px: [24]
        }, {
            name: 'add_circle_outline',
            version: 11,
            popularity: 16107,
            codepoint: 57672,
            unsupported_families: [],
            categories: ['content'],
            tags: ['+', 'add', 'circle', 'create', 'new', 'outline', 'plus'],
            sizes_px: [24]
        }, {
            name: 'add_comment',
            version: 9,
            popularity: 1007,
            codepoint: 57958,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['+', 'add', 'bubble', 'chat', 'comment', 'communicate', 'feedback', 'message', 'new', 'plus', 'speech', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'add_ic_call',
            version: 10,
            popularity: 552,
            codepoint: 59772,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['+', 'add', 'call', 'cell', 'contact', 'device', 'hardware', 'ic', 'mobile', 'new', 'phone', 'plus', 'symbol', 'telephone'],
            sizes_px: [24]
        }, {
            name: 'add_link',
            version: 9,
            popularity: 1103,
            codepoint: 57720,
            unsupported_families: [],
            categories: ['content'],
            tags: ['add', 'attach', 'clip', 'link', 'new', 'plus', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'add_location',
            version: 14,
            popularity: 781,
            codepoint: 58727,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['+', 'add', 'destination', 'direction', 'location', 'maps', 'new', 'pin', 'place', 'plus', 'stop', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'add_location_alt',
            version: 11,
            popularity: 854,
            codepoint: 61242,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['+', 'add', 'alt', 'destination', 'direction', 'location', 'maps', 'new', 'pin', 'place', 'plus', 'stop', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'add_moderator',
            version: 10,
            popularity: 651,
            codepoint: 59773,
            unsupported_families: [],
            categories: ['social'],
            tags: ['+', 'add', 'certified', 'moderator', 'new', 'plus', 'privacy', 'private', 'protect', 'protection', 'security', 'shield', 'symbol', 'verified'],
            sizes_px: [24]
        }, {
            name: 'add_photo_alternate',
            version: 10,
            popularity: 2523,
            codepoint: 58430,
            unsupported_families: [],
            categories: ['image'],
            tags: ['+', 'add', 'alternate', 'image', 'landscape', 'mountain', 'mountains', 'new', 'photo', 'photography', 'picture', 'plus', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'add_reaction',
            version: 7,
            popularity: 670,
            codepoint: 57811,
            unsupported_families: [],
            categories: ['social'],
            tags: [],
            sizes_px: [24]
        }, {
            name: 'add_road',
            version: 10,
            popularity: 498,
            codepoint: 61243,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['+', 'add', 'destination', 'direction', 'highway', 'maps', 'new', 'plus', 'road', 'stop', 'street', 'symbol', 'traffic'],
            sizes_px: [20, 24]
        }, {
            name: 'add_shopping_cart',
            version: 13,
            popularity: 6992,
            codepoint: 59476,
            unsupported_families: [],
            categories: ['action'],
            tags: ['add', 'card', 'cart', 'cash', 'checkout', 'coin', 'commerce', 'credit', 'currency', 'dollars', 'money', 'online', 'pay', 'payment', 'plus', 'shopping'],
            sizes_px: [24]
        }, {
            name: 'add_task',
            version: 4,
            popularity: 3977,
            codepoint: 62010,
            unsupported_families: [],
            categories: ['action'],
            tags: ['+', 'add', 'approve', 'check', 'circle', 'completed', 'increase', 'mark', 'ok', 'plus', 'select', 'task', 'tick', 'yes'],
            sizes_px: [24]
        }, {
            name: 'add_to_drive',
            version: 16,
            popularity: 1321,
            codepoint: 58972,
            unsupported_families: [],
            categories: ['action'],
            tags: ['+', 'add', 'app', 'backup', 'cloud', 'drive', 'files', 'folders', 'gdrive', 'google', 'plus', 'storage', 'to'],
            sizes_px: [20, 24]
        }, {
            name: 'add_to_home_screen',
            version: 10,
            popularity: 265,
            codepoint: 57854,
            unsupported_families: [],
            categories: ['device'],
            tags: ['Android', 'OS', 'add to', 'arrow', 'cell', 'device', 'hardware', 'home', 'iOS', 'mobile', 'phone', 'screen', 'tablet', 'up'],
            sizes_px: [24]
        }, {
            name: 'add_to_photos',
            version: 10,
            popularity: 476,
            codepoint: 58269,
            unsupported_families: [],
            categories: ['image'],
            tags: ['add', 'collection', 'image', 'landscape', 'mountain', 'mountains', 'photo', 'photography', 'photos', 'picture', 'plus', 'to'],
            sizes_px: [24]
        }, {
            name: 'add_to_queue',
            version: 9,
            popularity: 417,
            codepoint: 57436,
            unsupported_families: [],
            categories: ['av'],
            tags: ['+', 'Android', 'OS', 'add', 'chrome', 'desktop', 'device', 'display', 'hardware', 'iOS', 'mac', 'monitor', 'new', 'plus', 'queue', 'screen', 'symbol', 'to', 'web', 'window'],
            sizes_px: [24]
        }, {
            name: 'addchart',
            version: 11,
            popularity: 1400,
            codepoint: 61244,
            unsupported_families: [],
            categories: ['action'],
            tags: ['add', 'analytics', 'bar', 'bars', 'chart', 'data', 'diagram', 'graph', 'infographic', 'measure', 'metrics', 'plus', 'statistics', 'tracking'],
            sizes_px: [24]
        }, {
            name: 'adjust',
            version: 10,
            popularity: 1466,
            codepoint: 58270,
            unsupported_families: [],
            categories: ['image'],
            tags: ['adjust', 'alter', 'center', 'circle', 'circles', 'control', 'dot', 'edit', 'filter', 'fix', 'image', 'mix', 'move', 'setting', 'slider', 'sort', 'switch', 'target', 'tune'],
            sizes_px: [24]
        }, {
            name: 'admin_panel_settings',
            version: 11,
            popularity: 6778,
            codepoint: 61245,
            unsupported_families: [],
            categories: ['action'],
            tags: ['account', 'admin', 'avatar', 'certified', 'face', 'human', 'panel', 'people', 'person', 'privacy', 'private', 'profile', 'protect', 'protection', 'security', 'settings', 'shield', 'user', 'verified'],
            sizes_px: [20, 24]
        }, {
            name: 'ads_click',
            version: 1,
            popularity: 1966,
            codepoint: 59234,
            unsupported_families: [],
            categories: ['action'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'agriculture',
            version: 9,
            popularity: 992,
            codepoint: 60025,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['agriculture', 'automobile', 'car', 'cars', 'cultivation', 'farm', 'harvest', 'maps', 'tractor', 'transport', 'travel', 'truck', 'vehicle'],
            sizes_px: [20, 24]
        }, {
            name: 'air',
            version: 8,
            popularity: 1508,
            codepoint: 61400,
            unsupported_families: [],
            categories: ['device'],
            tags: ['air', 'blowing', 'breeze', 'flow', 'wave', 'weather', 'wind'],
            sizes_px: [24]
        }, {
            name: 'airline_seat_flat',
            version: 10,
            popularity: 189,
            codepoint: 58928,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['airline', 'body', 'business', 'class', 'first', 'flat', 'human', 'people', 'person', 'rest', 'seat', 'sleep', 'travel'],
            sizes_px: [24]
        }, {
            name: 'airline_seat_flat_angled',
            version: 10,
            popularity: 172,
            codepoint: 58929,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['airline', 'angled', 'body', 'business', 'class', 'first', 'flat', 'human', 'people', 'person', 'rest', 'seat', 'sleep', 'travel'],
            sizes_px: [24]
        }, {
            name: 'airline_seat_individual_suite',
            version: 9,
            popularity: 200,
            codepoint: 58930,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['airline', 'body', 'business', 'class', 'first', 'human', 'individual', 'people', 'person', 'rest', 'seat', 'sleep', 'suite', 'travel'],
            sizes_px: [24]
        }, {
            name: 'airline_seat_legroom_extra',
            version: 10,
            popularity: 140,
            codepoint: 58931,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['airline', 'body', 'extra', 'feet', 'human', 'leg', 'legroom', 'people', 'person', 'seat', 'sitting', 'space', 'travel'],
            sizes_px: [24]
        }, {
            name: 'airline_seat_legroom_normal',
            version: 10,
            popularity: 140,
            codepoint: 58932,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['airline', 'body', 'feet', 'human', 'leg', 'legroom', 'normal', 'people', 'person', 'seat', 'sitting', 'space', 'travel'],
            sizes_px: [24]
        }, {
            name: 'airline_seat_legroom_reduced',
            version: 10,
            popularity: 137,
            codepoint: 58933,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['airline', 'body', 'feet', 'human', 'leg', 'legroom', 'people', 'person', 'reduced', 'seat', 'sitting', 'space', 'travel'],
            sizes_px: [24]
        }, {
            name: 'airline_seat_recline_extra',
            version: 10,
            popularity: 266,
            codepoint: 58934,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['airline', 'body', 'extra', 'feet', 'human', 'leg', 'legroom', 'people', 'person', 'seat', 'sitting', 'space', 'travel'],
            sizes_px: [24]
        }, {
            name: 'airline_seat_recline_normal',
            version: 10,
            popularity: 396,
            codepoint: 58935,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['airline', 'body', 'extra', 'feet', 'human', 'leg', 'legroom', 'normal', 'people', 'person', 'recline', 'seat', 'sitting', 'space', 'travel'],
            sizes_px: [24]
        }, {
            name: 'airplane_ticket',
            version: 9,
            popularity: 839,
            codepoint: 61401,
            unsupported_families: [],
            categories: ['device'],
            tags: ['airplane', 'airport', 'boarding', 'flight', 'fly', 'maps', 'pass', 'ticket', 'transportation', 'travel'],
            sizes_px: [24]
        }, {
            name: 'airplanemode_active',
            version: 14,
            popularity: 589,
            codepoint: 57749,
            unsupported_families: [],
            categories: ['device'],
            tags: ['active', 'airplane', 'airplanemode', 'flight', 'mode', 'on', 'signal'],
            sizes_px: [20, 24]
        }, {
            name: 'airplanemode_inactive',
            version: 15,
            popularity: 205,
            codepoint: 57748,
            unsupported_families: [],
            categories: ['device'],
            tags: ['airplane', 'airplanemode', 'airport', 'disabled', 'enabled', 'flight', 'fly', 'inactive', 'maps', 'mode', 'off', 'offline', 'on', 'slash', 'transportation', 'travel'],
            sizes_px: [20, 24]
        }, {
            name: 'airplay',
            version: 11,
            popularity: 409,
            codepoint: 57429,
            unsupported_families: [],
            categories: ['av'],
            tags: ['airplay', 'apple', 'arrow', 'cast', 'connect', 'control', 'desktop', 'device', 'display', 'monitor', 'screen', 'signal', 'tv'],
            sizes_px: [24]
        }, {
            name: 'airport_shuttle',
            version: 10,
            popularity: 1229,
            codepoint: 60220,
            unsupported_families: [],
            categories: ['places'],
            tags: ['airport', 'automobile', 'car', 'cars', 'commercial', 'delivery', 'direction', 'maps', 'mini', 'public', 'shuttle', 'transport', 'transportation', 'travel', 'truck', 'van', 'vehicle'],
            sizes_px: [24]
        }, {
            name: 'alarm',
            version: 10,
            popularity: 3870,
            codepoint: 59477,
            unsupported_families: [],
            categories: ['action'],
            tags: ['alarm', 'alart', 'bell', 'clock', 'countdown', 'date', 'notification', 'schedule', 'time'],
            sizes_px: [24]
        }, {
            name: 'alarm_add',
            version: 10,
            popularity: 838,
            codepoint: 59478,
            unsupported_families: [],
            categories: ['action'],
            tags: ['+', 'add', 'alarm', 'alart', 'bell', 'clock', 'countdown', 'date', 'new', 'notification', 'plus', 'schedule', 'symbol', 'time'],
            sizes_px: [24]
        }, {
            name: 'alarm_off',
            version: 10,
            popularity: 551,
            codepoint: 59479,
            unsupported_families: [],
            categories: ['action'],
            tags: ['alarm', 'alart', 'bell', 'clock', 'disabled', 'duration', 'enabled', 'notification', 'off', 'on', 'slash', 'time', 'timer', 'watch'],
            sizes_px: [24]
        }, {
            name: 'alarm_on',
            version: 10,
            popularity: 1473,
            codepoint: 59480,
            unsupported_families: [],
            categories: ['action'],
            tags: ['alarm', 'alart', 'bell', 'clock', 'disabled', 'duration', 'enabled', 'notification', 'off', 'on', 'slash', 'time', 'timer', 'watch'],
            sizes_px: [24]
        }, {
            name: 'album',
            version: 10,
            popularity: 941,
            codepoint: 57369,
            unsupported_families: [],
            categories: ['av'],
            tags: ['album', 'artist', 'audio', 'bvb', 'cd', 'computer', 'data', 'disk', 'file', 'music', 'record', 'sound', 'storage', 'track', 'vinyl'],
            sizes_px: [24]
        }, {
            name: 'align_horizontal_center',
            version: 4,
            popularity: 239,
            codepoint: 57359,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['align', 'alignment', 'center', 'format', 'horizontal', 'layout', 'lines', 'paragraph', 'rule', 'rules', 'style', 'text'],
            sizes_px: [24]
        }, {
            name: 'align_horizontal_left',
            version: 5,
            popularity: 400,
            codepoint: 57357,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['align', 'alignment', 'format', 'horizontal', 'layout', 'left', 'lines', 'paragraph', 'rule', 'rules', 'style', 'text'],
            sizes_px: [24]
        }, {
            name: 'align_horizontal_right',
            version: 5,
            popularity: 253,
            codepoint: 57360,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['align', 'alignment', 'format', 'horizontal', 'layout', 'lines', 'paragraph', 'right', 'rule', 'rules', 'style', 'text'],
            sizes_px: [24]
        }, {
            name: 'align_vertical_bottom',
            version: 4,
            popularity: 261,
            codepoint: 57365,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['align', 'alignment', 'bottom', 'format', 'layout', 'lines', 'paragraph', 'rule', 'rules', 'style', 'text', 'vertical'],
            sizes_px: [24]
        }, {
            name: 'align_vertical_center',
            version: 4,
            popularity: 199,
            codepoint: 57361,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['align', 'alignment', 'center', 'format', 'layout', 'lines', 'paragraph', 'rule', 'rules', 'style', 'text', 'vertical'],
            sizes_px: [24]
        }, {
            name: 'align_vertical_top',
            version: 4,
            popularity: 208,
            codepoint: 57356,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['align', 'alignment', 'format', 'layout', 'lines', 'paragraph', 'rule', 'rules', 'style', 'text', 'top', 'vertical'],
            sizes_px: [24]
        }, {
            name: 'all_inbox',
            version: 9,
            popularity: 1015,
            codepoint: 59775,
            unsupported_families: [],
            categories: ['action'],
            tags: ['Inbox', 'all', 'delivered', 'delivery', 'email', 'mail', 'message', 'send'],
            sizes_px: [24]
        }, {
            name: 'all_inclusive',
            version: 9,
            popularity: 1256,
            codepoint: 60221,
            unsupported_families: [],
            categories: ['places'],
            tags: ['all', 'endless', 'forever', 'inclusive', 'infinity', 'loop', 'mobius', 'neverending', 'strip', 'sustainability', 'sustainable'],
            sizes_px: [24]
        }, {
            name: 'all_out',
            version: 10,
            popularity: 389,
            codepoint: 59659,
            unsupported_families: [],
            categories: ['action'],
            tags: ['all', 'circle', 'out', 'shape'],
            sizes_px: [24]
        }, {
            name: 'alt_route',
            version: 7,
            popularity: 1124,
            codepoint: 61828,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['alt', 'alternate', 'alternative', 'arrows', 'direction', 'maps', 'navigation', 'options', 'other', 'route', 'routes', 'split', 'symbol'],
            sizes_px: [20, 24]
        }, {
            name: 'alternate_email',
            version: 11,
            popularity: 4534,
            codepoint: 57574,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['@', 'address', 'alternate', 'contact', 'email', 'tag'],
            sizes_px: [24]
        }, {
            name: 'analytics',
            version: 10,
            popularity: 8045,
            codepoint: 61246,
            unsupported_families: [],
            categories: ['action'],
            tags: ['analytics', 'assessment', 'bar', 'chart', 'data', 'diagram', 'graph', 'infographic', 'measure', 'metrics', 'statistics', 'tracking'],
            sizes_px: [24]
        }, {
            name: 'anchor',
            version: 5,
            popularity: 1257,
            codepoint: 61901,
            unsupported_families: [],
            categories: ['action'],
            tags: ['anchor', 'google', 'logo'],
            sizes_px: [24]
        }, {
            name: 'android',
            version: 12,
            popularity: 7630,
            codepoint: 59481,
            unsupported_families: [],
            categories: ['action'],
            tags: ['android', 'character', 'logo', 'mascot', 'toy'],
            sizes_px: [20, 24]
        }, {
            name: 'animation',
            version: 12,
            popularity: 473,
            codepoint: 59164,
            unsupported_families: [],
            categories: ['image'],
            tags: ['animation', 'circles', 'motion', 'movie', 'moving', 'video'],
            sizes_px: [24]
        }, {
            name: 'announcement',
            version: 13,
            popularity: 2784,
            codepoint: 59482,
            unsupported_families: [],
            categories: ['action'],
            tags: ['!', 'alert', 'announcement', 'attention', 'bubble', 'caution', 'chat', 'comment', 'communicate', 'danger', 'error', 'exclamation', 'feedback', 'important', 'mark', 'message', 'notification', 'speech', 'symbol', 'warning'],
            sizes_px: [24]
        }, {
            name: 'aod',
            version: 8,
            popularity: 335,
            codepoint: 61402,
            unsupported_families: [],
            categories: ['device'],
            tags: ['Android', 'OS', 'always', 'aod', 'device', 'display', 'hardware', 'homescreen', 'iOS', 'mobile', 'on', 'phone', 'tablet'],
            sizes_px: [24]
        }, {
            name: 'apartment',
            version: 9,
            popularity: 4302,
            codepoint: 59968,
            unsupported_families: [],
            categories: ['places'],
            tags: ['accommodation', 'apartment', 'architecture', 'building', 'city', 'company', 'estate', 'flat', 'home', 'house', 'office', 'places', 'real', 'residence', 'residential', 'shelter', 'units', 'workplace'],
            sizes_px: [20, 24]
        }, {
            name: 'api',
            version: 5,
            popularity: 2501,
            codepoint: 61879,
            unsupported_families: [],
            categories: ['action'],
            tags: ['api', 'developer', 'development', 'enterprise', 'software'],
            sizes_px: [24]
        }, {
            name: 'app_blocking',
            version: 11,
            popularity: 553,
            codepoint: 61247,
            unsupported_families: [],
            categories: ['action'],
            tags: ['Android', 'OS', 'app', 'applications', 'cancel', 'cell', 'device', 'hardware', 'iOS', 'mobile', 'phone', 'stop', 'tablet'],
            sizes_px: [24]
        }, {
            name: 'app_registration',
            version: 9,
            popularity: 2316,
            codepoint: 61248,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['app', 'apps', 'edit', 'pencil', 'register', 'registration'],
            sizes_px: [20, 24]
        }, {
            name: 'app_settings_alt',
            version: 15,
            popularity: 704,
            codepoint: 61249,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['Android', 'OS', 'app', 'applications', 'cell', 'device', 'gear', 'hardware', 'iOS', 'mobile', 'phone', 'setting', 'settings', 'tablet'],
            sizes_px: [24]
        }, {
            name: 'approval',
            version: 9,
            popularity: 964,
            codepoint: 59778,
            unsupported_families: [],
            categories: ['file'],
            tags: ['apply', 'approval', 'approvals', 'approve', 'certificate', 'certification', 'disapproval', 'drive', 'file', 'impression', 'ink', 'mark', 'postage', 'stamp'],
            sizes_px: [24]
        }, {
            name: 'apps',
            version: 10,
            popularity: 8717,
            codepoint: 58819,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['all', 'applications', 'apps', 'circles', 'collection', 'dots', 'grid', 'squares'],
            sizes_px: [24]
        }, {
            name: 'architecture',
            version: 9,
            popularity: 1404,
            codepoint: 59963,
            unsupported_families: [],
            categories: ['social'],
            tags: ['architecture', 'art', 'compass', 'design', 'draw', 'drawing', 'engineering', 'geometric', 'tool'],
            sizes_px: [20, 24]
        }, {
            name: 'archive',
            version: 11,
            popularity: 2581,
            codepoint: 57673,
            unsupported_families: [],
            categories: ['content'],
            tags: ['archive', 'inbox', 'mail', 'store'],
            sizes_px: [24]
        }, {
            name: 'arrow_back',
            version: 12,
            popularity: 26664,
            codepoint: 58820,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['app', 'application', 'arrow', 'back', 'components', 'direction', 'interface', 'left', 'navigation', 'previous', 'screen', 'site', 'ui', 'ux', 'web', 'website'],
            sizes_px: [24]
        }, {
            name: 'arrow_back_ios',
            version: 12,
            popularity: 18443,
            codepoint: 58848,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['app', 'application', 'arrow', 'back', 'chevron', 'components', 'direction', 'interface', 'ios', 'left', 'navigation', 'previous', 'screen', 'site', 'ui', 'ux', 'web', 'website'],
            sizes_px: [24]
        }, {
            name: 'arrow_back_ios_new',
            version: 4,
            popularity: 6511,
            codepoint: 58090,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['app', 'application', 'arrow', 'back', 'chevron', 'components', 'direction', 'interface', 'ios', 'left', 'navigation', 'new', 'previous', 'screen', 'site', 'ui', 'ux', 'web', 'website'],
            sizes_px: [20, 24]
        }, {
            name: 'arrow_circle_down',
            version: 6,
            popularity: 2150,
            codepoint: 61825,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrow', 'circle', 'direction', 'down', 'navigation'],
            sizes_px: [20, 24]
        }, {
            name: 'arrow_circle_up',
            version: 6,
            popularity: 2713,
            codepoint: 61826,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrow', 'circle', 'direction', 'navigation', 'up'],
            sizes_px: [20, 24]
        }, {
            name: 'arrow_downward',
            version: 12,
            popularity: 5104,
            codepoint: 58843,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['app', 'application', 'arrow', 'components', 'direction', 'down', 'downward', 'interface', 'navigation', 'screen', 'site', 'ui', 'ux', 'web', 'website'],
            sizes_px: [24]
        }, {
            name: 'arrow_drop_down',
            version: 11,
            popularity: 17016,
            codepoint: 58821,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['app', 'application', 'arrow', 'components', 'direction', 'down', 'drop', 'interface', 'navigation', 'screen', 'site', 'ui', 'ux', 'web', 'website'],
            sizes_px: [24]
        }, {
            name: 'arrow_drop_down_circle',
            version: 10,
            popularity: 1946,
            codepoint: 58822,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['app', 'application', 'arrow', 'circle', 'components', 'direction', 'down', 'drop', 'interface', 'navigation', 'screen', 'site', 'ui', 'ux', 'web', 'website'],
            sizes_px: [24]
        }, {
            name: 'arrow_drop_up',
            version: 10,
            popularity: 3372,
            codepoint: 58823,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['app', 'application', 'arrow', 'components', 'direction', 'drop', 'interface', 'navigation', 'screen', 'site', 'ui', 'up', 'ux', 'web', 'website'],
            sizes_px: [24]
        }, {
            name: 'arrow_forward',
            version: 11,
            popularity: 12885,
            codepoint: 58824,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['app', 'application', 'arrow', 'arrows', 'components', 'direction', 'forward', 'interface', 'navigation', 'right', 'screen', 'site', 'ui', 'ux', 'web', 'website'],
            sizes_px: [24]
        }, {
            name: 'arrow_forward_ios',
            version: 14,
            popularity: 19848,
            codepoint: 58849,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['app', 'application', 'arrow', 'chevron', 'components', 'direction', 'forward', 'interface', 'ios', 'navigation', 'next', 'right', 'screen', 'site', 'ui', 'ux', 'web', 'website'],
            sizes_px: [20, 24]
        }, {
            name: 'arrow_left',
            version: 10,
            popularity: 2321,
            codepoint: 58846,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['app', 'application', 'arrow', 'back', 'backstack', 'backward', 'components', 'direction', 'interface', 'left', 'navigation', 'previous', 'screen', 'site', 'ui', 'ux', 'web', 'website'],
            sizes_px: [24]
        }, {
            name: 'arrow_right',
            version: 10,
            popularity: 5229,
            codepoint: 58847,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['app', 'application', 'arrow', 'components', 'continue', 'direction', 'forward', 'interface', 'navigation', 'right', 'screen', 'site', 'ui', 'ux', 'web', 'website'],
            sizes_px: [24]
        }, {
            name: 'arrow_right_alt',
            version: 11,
            popularity: 10181,
            codepoint: 59713,
            unsupported_families: [],
            categories: ['action'],
            tags: ['alt', 'arrow', 'arrows', 'direction', 'east', 'navigation', 'pointing', 'right'],
            sizes_px: [24]
        }, {
            name: 'arrow_upward',
            version: 9,
            popularity: 6976,
            codepoint: 58840,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['app', 'application', 'arrow', 'components', 'direction', 'interface', 'navigation', 'screen', 'site', 'ui', 'up', 'upward', 'ux', 'web', 'website'],
            sizes_px: [24]
        }, {
            name: 'art_track',
            version: 11,
            popularity: 286,
            codepoint: 57440,
            unsupported_families: [],
            categories: ['av'],
            tags: ['album', 'art', 'artist', 'audio', 'image', 'music', 'photo', 'photography', 'picture', 'sound', 'track', 'tracks'],
            sizes_px: [24]
        }, {
            name: 'article',
            version: 11,
            popularity: 11294,
            codepoint: 61250,
            unsupported_families: [],
            categories: ['action'],
            tags: ['article', 'clarify', 'doc', 'document', 'file', 'news', 'page', 'paper', 'text', 'writing'],
            sizes_px: [24]
        }, {
            name: 'aspect_ratio',
            version: 10,
            popularity: 1504,
            codepoint: 59483,
            unsupported_families: [],
            categories: ['action'],
            tags: ['aspect', 'expand', 'image', 'ratio', 'resize', 'scale', 'size', 'square'],
            sizes_px: [24]
        }, {
            name: 'assessment',
            version: 10,
            popularity: 4739,
            codepoint: 59484,
            unsupported_families: [],
            categories: ['action'],
            tags: ['analytics', 'assessment', 'bar', 'chart', 'data', 'diagram', 'graph', 'infographic', 'measure', 'metrics', 'statistics', 'tracking'],
            sizes_px: [24]
        }, {
            name: 'assignment',
            version: 11,
            popularity: 9094,
            codepoint: 59485,
            unsupported_families: [],
            categories: ['action'],
            tags: ['assignment', 'clipboard', 'doc', 'document', 'text', 'writing'],
            sizes_px: [24]
        }, {
            name: 'assignment_ind',
            version: 10,
            popularity: 4047,
            codepoint: 59486,
            unsupported_families: [],
            categories: ['action'],
            tags: ['account', 'assignment', 'clipboard', 'doc', 'document', 'face', 'ind', 'people', 'person', 'profile', 'user'],
            sizes_px: [24]
        }, {
            name: 'assignment_late',
            version: 13,
            popularity: 1075,
            codepoint: 59487,
            unsupported_families: [],
            categories: ['action'],
            tags: ['!', 'alert', 'assignment', 'attention', 'caution', 'clipboard', 'danger', 'doc', 'document', 'error', 'exclamation', 'important', 'late', 'mark', 'notification', 'symbol', 'warning'],
            sizes_px: [24]
        }, {
            name: 'assignment_return',
            version: 12,
            popularity: 968,
            codepoint: 59488,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrow', 'assignment', 'back', 'clipboard', 'doc', 'document', 'left', 'retun'],
            sizes_px: [24]
        }, {
            name: 'assignment_returned',
            version: 10,
            popularity: 611,
            codepoint: 59489,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrow', 'assignment', 'clipboard', 'doc', 'document', 'down', 'returned'],
            sizes_px: [24]
        }, {
            name: 'assignment_turned_in',
            version: 11,
            popularity: 3524,
            codepoint: 59490,
            unsupported_families: [],
            categories: ['action'],
            tags: ['approve', 'assignment', 'check', 'clipboard', 'complete', 'doc', 'document', 'done', 'in', 'mark', 'ok', 'select', 'tick', 'turn', 'validate', 'verified', 'yes'],
            sizes_px: [24]
        }, {
            name: 'assistant',
            version: 10,
            popularity: 739,
            codepoint: 58271,
            unsupported_families: [],
            categories: ['image'],
            tags: ['assistant', 'bubble', 'chat', 'comment', 'communicate', 'feedback', 'message', 'recommendation', 'speech', 'star', 'suggestion', 'twinkle'],
            sizes_px: [24]
        }, {
            name: 'assistant_direction',
            version: 9,
            popularity: 762,
            codepoint: 59784,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['assistant', 'destination', 'direction', 'location', 'maps', 'navigate', 'navigation', 'pin', 'place', 'right', 'stop'],
            sizes_px: [24]
        }, {
            name: 'assistant_photo',
            version: 10,
            popularity: 331,
            codepoint: 58272,
            unsupported_families: [],
            categories: ['image'],
            tags: ['assistant', 'flag', 'photo', 'recommendation', 'smart', 'star', 'suggestion'],
            sizes_px: [24]
        }, {
            name: 'atm',
            version: 10,
            popularity: 385,
            codepoint: 58739,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['alphabet', 'atm', 'automated', 'bill', 'card', 'cart', 'cash', 'character', 'coin', 'commerce', 'credit', 'currency', 'dollars', 'font', 'letter', 'machine', 'money', 'online', 'pay', 'payment', 'shopping', 'symbol', 'teller', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'attach_email',
            version: 14,
            popularity: 702,
            codepoint: 59998,
            unsupported_families: [],
            categories: ['file'],
            tags: ['attach', 'attachment', 'clip', 'compose', 'email', 'envelop', 'letter', 'link', 'mail', 'message', 'send'],
            sizes_px: [20, 24]
        }, {
            name: 'attach_file',
            version: 11,
            popularity: 4755,
            codepoint: 57894,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['add', 'attach', 'clip', 'file', 'link', 'mail', 'media'],
            sizes_px: [24]
        }, {
            name: 'attach_money',
            version: 12,
            popularity: 9041,
            codepoint: 57895,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['attach', 'bill', 'card', 'cash', 'coin', 'commerce', 'cost', 'credit', 'currency', 'dollars', 'finance', 'money', 'online', 'pay', 'payment', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'attachment',
            version: 10,
            popularity: 2761,
            codepoint: 58044,
            unsupported_families: [],
            categories: ['file'],
            tags: ['attach', 'attachment', 'clip', 'compose', 'file', 'image', 'link'],
            sizes_px: [24]
        }, {
            name: 'attractions',
            version: 8,
            popularity: 442,
            codepoint: 59986,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['amusement', 'attractions', 'entertainment', 'ferris', 'fun', 'maps', 'park', 'places', 'wheel'],
            sizes_px: [20, 24]
        }, {
            name: 'attribution',
            version: 9,
            popularity: 675,
            codepoint: 61403,
            unsupported_families: [],
            categories: ['content'],
            tags: ['attribute', 'attribution', 'body', 'copyright', 'copywriter', 'human', 'people', 'person'],
            sizes_px: [24]
        }, {
            name: 'audiotrack',
            version: 10,
            popularity: 1674,
            codepoint: 58273,
            unsupported_families: [],
            categories: ['image'],
            tags: ['audio', 'audiotrack', 'key', 'music', 'note', 'sound', 'track'],
            sizes_px: [24]
        }, {
            name: 'auto_awesome',
            version: 12,
            popularity: 3898,
            codepoint: 58975,
            unsupported_families: [],
            categories: ['image'],
            tags: ['auto', 'awesome', 'edit', 'editing', 'enhance', 'filter', 'image', 'photography', 'photos', 'setting', 'stars'],
            sizes_px: [24]
        }, {
            name: 'auto_awesome_mosaic',
            version: 12,
            popularity: 707,
            codepoint: 58976,
            unsupported_families: [],
            categories: ['image'],
            tags: ['auto', 'awesome', 'edit', 'editing', 'filter', 'grid', 'image', 'layout', 'mosaic', 'photographs', 'photography', 'photos', 'pictures', 'setting'],
            sizes_px: [24]
        }, {
            name: 'auto_awesome_motion',
            version: 12,
            popularity: 883,
            codepoint: 58977,
            unsupported_families: [],
            categories: ['image'],
            tags: ['animation', 'auto', 'awesome', 'edit', 'editing', 'filter', 'image', 'live', 'motion', 'photographs', 'photography', 'photos', 'pictures', 'setting', 'video'],
            sizes_px: [24]
        }, {
            name: 'auto_delete',
            version: 9,
            popularity: 802,
            codepoint: 59980,
            unsupported_families: [],
            categories: ['alert'],
            tags: ['auto', 'bin', 'can', 'clock', 'date', 'delete', 'garbage', 'remove', 'schedule', 'time', 'trash'],
            sizes_px: [20, 24]
        }, {
            name: 'auto_fix_high',
            version: 12,
            popularity: 1893,
            codepoint: 58979,
            unsupported_families: [],
            categories: ['image'],
            tags: ['auto', 'edit', 'erase', 'fix', 'high', 'magic', 'modify', 'star', 'stars', 'wand'],
            sizes_px: [24]
        }, {
            name: 'auto_fix_normal',
            version: 12,
            popularity: 447,
            codepoint: 58980,
            unsupported_families: [],
            categories: ['image'],
            tags: ['auto', 'edit', 'erase', 'fix', 'magic', 'modify', 'normal', 'star', 'stars', 'wand'],
            sizes_px: [24]
        }, {
            name: 'auto_fix_off',
            version: 11,
            popularity: 170,
            codepoint: 58981,
            unsupported_families: [],
            categories: ['image'],
            tags: ['auto', 'disabled', 'edit', 'enabled', 'erase', 'fix', 'magic', 'modify', 'off', 'on', 'slash', 'star', 'stars', 'wand'],
            sizes_px: [24]
        }, {
            name: 'auto_graph',
            version: 2,
            popularity: 1539,
            codepoint: 58619,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['analytics', 'auto', 'chart', 'data', 'diagram', 'graph', 'infographic', 'line', 'measure', 'metrics', 'stars', 'statistics', 'tracking'],
            sizes_px: [20, 24]
        }, {
            name: 'auto_stories',
            version: 11,
            popularity: 4464,
            codepoint: 58982,
            unsupported_families: [],
            categories: ['image'],
            tags: ['audiobook', 'auto', 'book', 'page', 'reading', 'stories', 'story'],
            sizes_px: [24]
        }, {
            name: 'autofps_select',
            version: 8,
            popularity: 107,
            codepoint: 61404,
            unsupported_families: [],
            categories: ['image'],
            tags: ['A', 'alphabet', 'auto', 'character', 'font', 'fps', 'frame', 'frequency', 'letter', 'per', 'rate', 'second', 'seconds', 'select', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'autorenew',
            version: 10,
            popularity: 7701,
            codepoint: 59491,
            unsupported_families: [],
            categories: ['action'],
            tags: ['around', 'arrow', 'arrows', 'autorenew', 'cache', 'cached', 'direction', 'inprogress', 'load', 'loading refresh', 'navigation', 'renew', 'rotate', 'turn'],
            sizes_px: [24]
        }, {
            name: 'av_timer',
            version: 10,
            popularity: 804,
            codepoint: 57371,
            unsupported_families: [],
            categories: ['av'],
            tags: ['av', 'clock', 'countdown', 'duration', 'minutes', 'seconds', 'time', 'timer', 'watch'],
            sizes_px: [24]
        }, {
            name: 'baby_changing_station',
            version: 6,
            popularity: 359,
            codepoint: 61851,
            unsupported_families: [],
            categories: ['places'],
            tags: ['babies', 'baby', 'bathroom', 'body', 'changing', 'child', 'children', 'father', 'human', 'infant', 'kids', 'mother', 'newborn', 'people', 'person', 'station', 'toddler', 'wc', 'young'],
            sizes_px: [24]
        }, {
            name: 'back_hand',
            version: 1,
            popularity: 1195,
            codepoint: 59236,
            unsupported_families: [],
            categories: ['social'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'backpack',
            version: 6,
            popularity: 424,
            codepoint: 61852,
            unsupported_families: [],
            categories: ['places'],
            tags: ['back', 'backpack', 'bag', 'book', 'bookbag', 'knapsack', 'pack', 'storage', 'travel'],
            sizes_px: [24]
        }, {
            name: 'backspace',
            version: 11,
            popularity: 2530,
            codepoint: 57674,
            unsupported_families: [],
            categories: ['content'],
            tags: ['arrow', 'back', 'backspace', 'cancel', 'clear', 'correct', 'delete', 'erase', 'remove'],
            sizes_px: [24]
        }, {
            name: 'backup',
            version: 13,
            popularity: 2246,
            codepoint: 59492,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrow', 'backup', 'cloud', 'data', 'drive', 'files folders', 'storage', 'up', 'upload'],
            sizes_px: [24]
        }, {
            name: 'backup_table',
            version: 9,
            popularity: 647,
            codepoint: 61251,
            unsupported_families: [],
            categories: ['action'],
            tags: ['backup', 'drive', 'files folders', 'format', 'layout', 'stack', 'storage', 'table'],
            sizes_px: [20, 24]
        }, {
            name: 'badge',
            version: 9,
            popularity: 5272,
            codepoint: 60007,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['account', 'avatar', 'badge', 'card', 'certified', 'employee', 'face', 'human', 'identification', 'name', 'people', 'person', 'profile', 'security', 'user', 'work'],
            sizes_px: [20, 24]
        }, {
            name: 'bakery_dining',
            version: 9,
            popularity: 683,
            codepoint: 59987,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['bakery', 'bread', 'breakfast', 'brunch', 'croissant', 'dining', 'food'],
            sizes_px: [20, 24]
        }, {
            name: 'balcony',
            version: 2,
            popularity: 303,
            codepoint: 58767,
            unsupported_families: [],
            categories: ['places'],
            tags: ['architecture', 'balcony', 'doors', 'estate', 'home', 'house', 'maps', 'out', 'outside', 'place', 'real', 'residence', 'residential', 'stay', 'terrace', 'window'],
            sizes_px: [20, 24]
        }, {
            name: 'ballot',
            version: 12,
            popularity: 1520,
            codepoint: 57714,
            unsupported_families: [],
            categories: ['content'],
            tags: ['ballot', 'bulllet', 'election', 'list', 'point', 'poll', 'vote'],
            sizes_px: [24]
        }, {
            name: 'bar_chart',
            version: 10,
            popularity: 3739,
            codepoint: 57963,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['analytics', 'bar', 'chart', 'data', 'diagram', 'graph', 'infographic', 'measure', 'metrics', 'statistics', 'tracking'],
            sizes_px: [24]
        }, {
            name: 'batch_prediction',
            version: 10,
            popularity: 681,
            codepoint: 61685,
            unsupported_families: [],
            categories: ['action'],
            tags: ['batch', 'bulb', 'idea', 'light', 'prediction'],
            sizes_px: [20, 24]
        }, {
            name: 'bathroom',
            version: 8,
            popularity: 541,
            codepoint: 61405,
            unsupported_families: [],
            categories: ['search'],
            tags: ['bath', 'bathroom', 'closet', 'home', 'house', 'place', 'plumbing', 'room', 'shower', 'sprinkler', 'wash', 'water', 'wc'],
            sizes_px: [24]
        }, {
            name: 'bathtub',
            version: 9,
            popularity: 637,
            codepoint: 59969,
            unsupported_families: [],
            categories: ['places'],
            tags: ['bath', 'bathing', 'bathroom', 'bathtub', 'home', 'hotel', 'human', 'person', 'shower', 'travel', 'tub'],
            sizes_px: [20, 24]
        }, {
            name: 'battery_alert',
            version: 10,
            popularity: 503,
            codepoint: 57756,
            unsupported_families: [],
            categories: ['device'],
            tags: ['!', 'alert', 'attention', 'battery', 'caution', 'cell', 'charge', 'danger', 'error', 'exclamation', 'important', 'mark', 'mobile', 'notification', 'power', 'symbol', 'warning'],
            sizes_px: [24]
        }, {
            name: 'battery_charging_full',
            version: 10,
            popularity: 1697,
            codepoint: 57763,
            unsupported_families: [],
            categories: ['device'],
            tags: ['battery', 'bolt', 'cell', 'charge', 'charging', 'full', 'lightening', 'mobile', 'power', 'thunderbolt'],
            sizes_px: [24]
        }, {
            name: 'battery_full',
            version: 10,
            popularity: 2465,
            codepoint: 57764,
            unsupported_families: [],
            categories: ['device'],
            tags: ['battery', 'cell', 'charge', 'full', 'mobile', 'power'],
            sizes_px: [24]
        }, {
            name: 'battery_saver',
            version: 7,
            popularity: 417,
            codepoint: 61406,
            unsupported_families: [],
            categories: ['device'],
            tags: ['+', 'add', 'battery', 'charge', 'charging', 'new', 'plus', 'power', 'saver', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'battery_std',
            version: 10,
            popularity: 855,
            codepoint: 57765,
            unsupported_families: [],
            categories: ['device'],
            tags: ['battery', 'cell', 'charge', 'mobile', 'plus', 'power', 'standard', 'std'],
            sizes_px: [24]
        }, {
            name: 'battery_unknown',
            version: 11,
            popularity: 315,
            codepoint: 57766,
            unsupported_families: [],
            categories: ['device'],
            tags: ['?', 'assistance', 'battery', 'cell', 'charge', 'help', 'info', 'information', 'mobile', 'power', 'punctuation', 'question mark', 'support', 'symbol', 'unknown'],
            sizes_px: [24]
        }, {
            name: 'beach_access',
            version: 10,
            popularity: 1078,
            codepoint: 60222,
            unsupported_families: [],
            categories: ['places'],
            tags: ['access', 'beach', 'places', 'summer', 'sunny', 'umbrella'],
            sizes_px: [24]
        }, {
            name: 'bed',
            version: 7,
            popularity: 1686,
            codepoint: 61407,
            unsupported_families: [],
            categories: ['search'],
            tags: ['bed', 'bedroom', 'double', 'full', 'furniture', 'home', 'hotel', 'house', 'king', 'night', 'pillows', 'queen', 'rest', 'room', 'size', 'sleep'],
            sizes_px: [24]
        }, {
            name: 'bedroom_baby',
            version: 7,
            popularity: 542,
            codepoint: 61408,
            unsupported_families: [],
            categories: ['search'],
            tags: ['babies', 'baby', 'bedroom', 'child', 'children', 'home', 'horse', 'house', 'infant', 'kid', 'newborn', 'rocking', 'room', 'toddler', 'young'],
            sizes_px: [24]
        }, {
            name: 'bedroom_child',
            version: 7,
            popularity: 499,
            codepoint: 61409,
            unsupported_families: [],
            categories: ['search'],
            tags: ['bed', 'bedroom', 'child', 'children', 'furniture', 'home', 'hotel', 'house', 'kid', 'night', 'pillows', 'rest', 'room', 'size', 'sleep', 'twin', 'young'],
            sizes_px: [24]
        }, {
            name: 'bedroom_parent',
            version: 7,
            popularity: 513,
            codepoint: 61410,
            unsupported_families: [],
            categories: ['search'],
            tags: ['bed', 'bedroom', 'double', 'full', 'furniture', 'home', 'hotel', 'house', 'king', 'night', 'parent', 'pillows', 'queen', 'rest', 'room', 'sizem master', 'sleep'],
            sizes_px: [24]
        }, {
            name: 'bedtime',
            version: 11,
            popularity: 431,
            codepoint: 61252,
            unsupported_families: [],
            categories: ['image'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'beenhere',
            version: 10,
            popularity: 988,
            codepoint: 58669,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['approve', 'archive', 'beenhere', 'bookmark', 'check', 'complete', 'done', 'favorite', 'label', 'library', 'mark', 'ok', 'read', 'reading', 'remember', 'ribbon', 'save', 'select', 'tag', 'tick', 'validate', 'verified', 'yes'],
            sizes_px: [24]
        }, {
            name: 'bento',
            version: 4,
            popularity: 286,
            codepoint: 61940,
            unsupported_families: [],
            categories: ['places'],
            tags: ['bento', 'box', 'dinner', 'food', 'lunch', 'meal', 'restaurant', 'takeout'],
            sizes_px: [24]
        }, {
            name: 'bike_scooter',
            version: 9,
            popularity: 213,
            codepoint: 61253,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['automobile', 'bike', 'car', 'cars', 'maps', 'scooter', 'transportation', 'vehicle', 'vespa'],
            sizes_px: [20, 24]
        }, {
            name: 'biotech',
            version: 9,
            popularity: 1596,
            codepoint: 59962,
            unsupported_families: [],
            categories: ['content'],
            tags: ['biotech', 'chemistry', 'laboratory', 'microscope', 'research', 'science', 'technology'],
            sizes_px: [20, 24]
        }, {
            name: 'blender',
            version: 7,
            popularity: 560,
            codepoint: 61411,
            unsupported_families: [],
            categories: ['search'],
            tags: ['appliance', 'blender', 'cooking', 'electric', 'juicer', 'kitchen', 'machine', 'vitamix'],
            sizes_px: [24]
        }, {
            name: 'block',
            version: 11,
            popularity: 3836,
            codepoint: 57675,
            unsupported_families: [],
            categories: ['content'],
            tags: ['avoid', 'block', 'cancel', 'close', 'entry', 'exit', 'no', 'prohibited', 'quit', 'remove', 'stop'],
            sizes_px: [24]
        }, {
            name: 'bloodtype',
            version: 8,
            popularity: 865,
            codepoint: 61412,
            unsupported_families: [],
            categories: ['device'],
            tags: ['blood', 'bloodtype', 'donate', 'droplet', 'emergency', 'hospital', 'medicine', 'negative', 'positive', 'type', 'water'],
            sizes_px: [24]
        }, {
            name: 'bluetooth',
            version: 9,
            popularity: 1263,
            codepoint: 57767,
            unsupported_families: [],
            categories: ['device'],
            tags: ['bluetooth', 'cast', 'connect', 'connection', 'device', 'paring', 'streaming', 'symbol', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'bluetooth_audio',
            version: 10,
            popularity: 233,
            codepoint: 58895,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['audio', 'bluetooth', 'connect', 'connection', 'device', 'music', 'signal', 'sound', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'bluetooth_connected',
            version: 10,
            popularity: 477,
            codepoint: 57768,
            unsupported_families: [],
            categories: ['device'],
            tags: ['bluetooth', 'cast', 'connect', 'connection', 'device', 'paring', 'streaming', 'symbol', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'bluetooth_disabled',
            version: 12,
            popularity: 315,
            codepoint: 57769,
            unsupported_families: [],
            categories: ['device'],
            tags: ['bluetooth', 'cast', 'connect', 'connection', 'device', 'disabled', 'enabled', 'off', 'offline', 'on', 'paring', 'slash', 'streaming', 'symbol', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'bluetooth_drive',
            version: 7,
            popularity: 160,
            codepoint: 61413,
            unsupported_families: [],
            categories: ['device'],
            tags: ['automobile', 'bluetooth', 'car', 'cars', 'cast', 'connect', 'connection', 'device', 'drive', 'maps', 'paring', 'streaming', 'symbol', 'transportation', 'travel', 'vehicle', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'bluetooth_searching',
            version: 11,
            popularity: 361,
            codepoint: 57770,
            unsupported_families: [],
            categories: ['device'],
            tags: ['bluetooth', 'connection', 'device', 'paring', 'search', 'searching', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'blur_circular',
            version: 10,
            popularity: 297,
            codepoint: 58274,
            unsupported_families: [],
            categories: ['image'],
            tags: ['blur', 'circle', 'circular', 'dots', 'edit', 'editing', 'effect', 'enhance', 'filter'],
            sizes_px: [24]
        }, {
            name: 'blur_linear',
            version: 10,
            popularity: 225,
            codepoint: 58275,
            unsupported_families: [],
            categories: ['image'],
            tags: ['blur', 'dots', 'edit', 'editing', 'effect', 'enhance', 'filter', 'linear'],
            sizes_px: [24]
        }, {
            name: 'blur_off',
            version: 10,
            popularity: 156,
            codepoint: 58276,
            unsupported_families: [],
            categories: ['image'],
            tags: ['blur', 'disabled', 'dots', 'edit', 'editing', 'effect', 'enabled', 'enhance', 'off', 'on', 'slash'],
            sizes_px: [24]
        }, {
            name: 'blur_on',
            version: 10,
            popularity: 915,
            codepoint: 58277,
            unsupported_families: [],
            categories: ['image'],
            tags: ['blur', 'disabled', 'dots', 'edit', 'editing', 'effect', 'enabled', 'enhance', 'filter', 'off', 'on', 'slash'],
            sizes_px: [24]
        }, {
            name: 'bolt',
            version: 8,
            popularity: 5255,
            codepoint: 59915,
            unsupported_families: [],
            categories: ['content'],
            tags: ['bolt', 'electric', 'energy', 'fast', 'flash', 'lightning', 'power', 'thunderbolt'],
            sizes_px: [24]
        }, {
            name: 'book',
            version: 12,
            popularity: 3715,
            codepoint: 59493,
            unsupported_families: [],
            categories: ['action'],
            tags: ['book', 'bookmark', 'favorite', 'label', 'library', 'read', 'reading', 'remember', 'ribbon', 'save', 'tag'],
            sizes_px: [24]
        }, {
            name: 'book_online',
            version: 8,
            popularity: 2608,
            codepoint: 61975,
            unsupported_families: [],
            categories: ['action'],
            tags: ['Android', 'OS', 'admission', 'appointment', 'book', 'cell', 'device', 'event', 'hardware', 'iOS', 'mobile', 'online', 'pass', 'phone', 'reservation', 'tablet', 'ticket'],
            sizes_px: [24]
        }, {
            name: 'bookmark',
            version: 12,
            popularity: 5411,
            codepoint: 59494,
            unsupported_families: [],
            categories: ['action'],
            tags: ['archive', 'bookmark', 'favorite', 'follow', 'label', 'library', 'read', 'reading', 'remember', 'ribbon', 'save', 'tag'],
            sizes_px: [24]
        }, {
            name: 'bookmark_add',
            version: 1,
            popularity: 1678,
            codepoint: 58776,
            unsupported_families: [],
            categories: ['action'],
            tags: ['+', 'add', 'bookmark', 'favorite', 'plus', 'remember', 'ribbon', 'save', 'symbol'],
            sizes_px: [20, 24]
        }, {
            name: 'bookmark_added',
            version: 1,
            popularity: 1256,
            codepoint: 58777,
            unsupported_families: [],
            categories: ['action'],
            tags: ['added', 'approve', 'bookmark', 'check', 'complete', 'done', 'favorite', 'mark', 'ok', 'remember', 'save', 'select', 'tick', 'validate', 'verified', 'yes'],
            sizes_px: [24]
        }, {
            name: 'bookmark_border',
            version: 10,
            popularity: 4879,
            codepoint: 59495,
            unsupported_families: [],
            categories: ['action'],
            tags: ['archive', 'bookmark', 'border', 'favorite', 'label', 'library', 'read', 'reading', 'remember', 'ribbon', 'save', 'tag'],
            sizes_px: [24]
        }, {
            name: 'bookmark_remove',
            version: 1,
            popularity: 624,
            codepoint: 58778,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bookmark', 'delete', 'favorite', 'minus', 'remember', 'remove', 'ribbon', 'save', 'subtract'],
            sizes_px: [20, 24]
        }, {
            name: 'bookmarks',
            version: 10,
            popularity: 2269,
            codepoint: 59787,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bookmark', 'bookmarks', 'favorite', 'label', 'layers', 'library', 'multiple', 'read', 'reading', 'remember', 'ribbon', 'save', 'stack', 'tag'],
            sizes_px: [24]
        }, {
            name: 'border_all',
            version: 10,
            popularity: 330,
            codepoint: 57896,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['all', 'border', 'doc', 'edit', 'editing', 'editor', 'sheet', 'spreadsheet', 'stroke', 'text', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'border_bottom',
            version: 10,
            popularity: 122,
            codepoint: 57897,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['border', 'bottom', 'doc', 'edit', 'editing', 'editor', 'sheet', 'spreadsheet', 'stroke', 'text', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'border_clear',
            version: 10,
            popularity: 201,
            codepoint: 57898,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['border', 'clear', 'doc', 'edit', 'editing', 'editor', 'sheet', 'spreadsheet', 'stroke', 'text', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'border_color',
            version: 12,
            popularity: 1915,
            codepoint: 57899,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['all', 'border', 'doc', 'edit', 'editing', 'editor', 'pen', 'pencil', 'sheet', 'spreadsheet', 'stroke', 'text', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'border_horizontal',
            version: 10,
            popularity: 116,
            codepoint: 57900,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['border', 'doc', 'edit', 'editing', 'editor', 'horizontal', 'sheet', 'spreadsheet', 'stroke', 'text', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'border_inner',
            version: 10,
            popularity: 117,
            codepoint: 57901,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['border', 'doc', 'edit', 'editing', 'editor', 'inner', 'sheet', 'spreadsheet', 'stroke', 'text', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'border_left',
            version: 10,
            popularity: 114,
            codepoint: 57902,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['border', 'doc', 'edit', 'editing', 'editor', 'left', 'sheet', 'spreadsheet', 'stroke', 'text', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'border_outer',
            version: 10,
            popularity: 190,
            codepoint: 57903,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['border', 'doc', 'edit', 'editing', 'editor', 'outer', 'sheet', 'spreadsheet', 'stroke', 'text', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'border_right',
            version: 10,
            popularity: 109,
            codepoint: 57904,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['border', 'doc', 'edit', 'editing', 'editor', 'right', 'sheet', 'spreadsheet', 'stroke', 'text', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'border_style',
            version: 10,
            popularity: 173,
            codepoint: 57905,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['border', 'color', 'doc', 'edit', 'editing', 'editor', 'sheet', 'spreadsheet', 'stroke', 'style', 'text', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'border_top',
            version: 10,
            popularity: 109,
            codepoint: 57906,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['border', 'doc', 'edit', 'editing', 'editor', 'sheet', 'spreadsheet', 'stroke', 'text', 'top', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'border_vertical',
            version: 10,
            popularity: 118,
            codepoint: 57907,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['border', 'doc', 'edit', 'editing', 'editor', 'sheet', 'spreadsheet', 'stroke', 'text', 'type', 'vertical', 'writing'],
            sizes_px: [24]
        }, {
            name: 'branding_watermark',
            version: 11,
            popularity: 748,
            codepoint: 57451,
            unsupported_families: [],
            categories: ['av'],
            tags: ['branding', 'components', 'copyright', 'design', 'emblem', 'format', 'identity', 'interface', 'layout', 'logo', 'screen', 'site', 'stamp', 'ui', 'ux', 'watermark', 'web', 'website', 'window'],
            sizes_px: [24]
        }, {
            name: 'breakfast_dining',
            version: 9,
            popularity: 398,
            codepoint: 59988,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['bakery', 'bread', 'breakfast', 'butter', 'dining', 'food', 'toast'],
            sizes_px: [20, 24]
        }, {
            name: 'brightness_1',
            version: 14,
            popularity: 519,
            codepoint: 58278,
            unsupported_families: [],
            categories: ['image'],
            tags: ['1', 'brightness', 'circle', 'control', 'cresent', 'level', 'moon', 'screen'],
            sizes_px: [24]
        }, {
            name: 'brightness_2',
            version: 10,
            popularity: 254,
            codepoint: 58279,
            unsupported_families: [],
            categories: ['image'],
            tags: ['2', 'brightness', 'circle', 'control', 'cresent', 'level', 'moon', 'screen'],
            sizes_px: [24]
        }, {
            name: 'brightness_3',
            version: 14,
            popularity: 295,
            codepoint: 58280,
            unsupported_families: [],
            categories: ['image'],
            tags: ['3', 'brightness', 'circle', 'control', 'cresent', 'level', 'moon', 'screen'],
            sizes_px: [24]
        }, {
            name: 'brightness_4',
            version: 14,
            popularity: 724,
            codepoint: 58281,
            unsupported_families: [],
            categories: ['image'],
            tags: ['4', 'brightness', 'circle', 'control', 'cresent', 'level', 'moon', 'screen', 'sun'],
            sizes_px: [24]
        }, {
            name: 'brightness_5',
            version: 10,
            popularity: 657,
            codepoint: 58282,
            unsupported_families: [],
            categories: ['image'],
            tags: ['5', 'brightness', 'circle', 'control', 'cresent', 'level', 'moon', 'screen', 'sun'],
            sizes_px: [24]
        }, {
            name: 'brightness_6',
            version: 10,
            popularity: 534,
            codepoint: 58283,
            unsupported_families: [],
            categories: ['image'],
            tags: ['6', 'brightness', 'circle', 'control', 'cresent', 'level', 'moon', 'screen', 'sun'],
            sizes_px: [24]
        }, {
            name: 'brightness_7',
            version: 11,
            popularity: 467,
            codepoint: 58284,
            unsupported_families: [],
            categories: ['image'],
            tags: ['7', 'brightness', 'circle', 'control', 'cresent', 'level', 'moon', 'screen', 'sun'],
            sizes_px: [24]
        }, {
            name: 'brightness_auto',
            version: 10,
            popularity: 216,
            codepoint: 57771,
            unsupported_families: [],
            categories: ['device'],
            tags: ['A', 'auto', 'brightness', 'control', 'display', 'level', 'mobile', 'monitor', 'phone', 'screen', 'sun'],
            sizes_px: [24]
        }, {
            name: 'brightness_high',
            version: 11,
            popularity: 365,
            codepoint: 57772,
            unsupported_families: [],
            categories: ['device'],
            tags: ['auto', 'brightness', 'control', 'high', 'mobile', 'monitor', 'phone', 'sun'],
            sizes_px: [24]
        }, {
            name: 'brightness_low',
            version: 10,
            popularity: 352,
            codepoint: 57773,
            unsupported_families: [],
            categories: ['device'],
            tags: ['auto', 'brightness', 'control', 'low', 'mobile', 'monitor', 'phone', 'sun'],
            sizes_px: [24]
        }, {
            name: 'brightness_medium',
            version: 10,
            popularity: 311,
            codepoint: 57774,
            unsupported_families: [],
            categories: ['device'],
            tags: ['auto', 'brightness', 'control', 'medium', 'mobile', 'monitor', 'phone', 'sun'],
            sizes_px: [24]
        }, {
            name: 'broken_image',
            version: 9,
            popularity: 745,
            codepoint: 58285,
            unsupported_families: [],
            categories: ['image'],
            tags: ['broken', 'corrupt', 'error', 'image', 'landscape', 'mountain', 'mountains', 'photo', 'photography', 'picture', 'torn'],
            sizes_px: [24]
        }, {
            name: 'browser_not_supported',
            version: 10,
            popularity: 173,
            codepoint: 61255,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['browser', 'disabled', 'enabled', 'internet', 'not', 'off', 'on', 'page', 'screen', 'site', 'slash', 'supported', 'web', 'website', 'www'],
            sizes_px: [20, 24]
        }, {
            name: 'brunch_dining',
            version: 9,
            popularity: 372,
            codepoint: 60019,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['breakfast', 'brunch', 'champaign', 'dining', 'drink', 'food', 'lunch', 'meal'],
            sizes_px: [20, 24]
        }, {
            name: 'brush',
            version: 11,
            popularity: 2247,
            codepoint: 58286,
            unsupported_families: [],
            categories: ['image'],
            tags: ['art', 'brush', 'design', 'draw', 'edit', 'editing', 'paint', 'painting', 'tool'],
            sizes_px: [24]
        }, {
            name: 'bubble_chart',
            version: 10,
            popularity: 947,
            codepoint: 59101,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['analytics', 'bar', 'bars', 'bubble', 'chart', 'data', 'diagram', 'graph', 'infographic', 'measure', 'metrics', 'statistics', 'tracking'],
            sizes_px: [24]
        }, {
            name: 'bug_report',
            version: 10,
            popularity: 4813,
            codepoint: 59496,
            unsupported_families: [],
            categories: ['action'],
            tags: ['animal', 'bug', 'fix', 'insect', 'issue', 'problem', 'report', 'testing', 'virus', 'warning'],
            sizes_px: [24]
        }, {
            name: 'build',
            version: 10,
            popularity: 9374,
            codepoint: 59497,
            unsupported_families: [],
            categories: ['action'],
            tags: ['adjust', 'build', 'fix', 'repair', 'tool', 'wrench'],
            sizes_px: [24]
        }, {
            name: 'build_circle',
            version: 12,
            popularity: 2259,
            codepoint: 61256,
            unsupported_families: [],
            categories: ['action'],
            tags: ['adjust', 'build', 'circle', 'fix', 'repair', 'tool', 'wrench'],
            sizes_px: [20, 24]
        }, {
            name: 'bungalow',
            version: 2,
            popularity: 283,
            codepoint: 58769,
            unsupported_families: [],
            categories: ['places'],
            tags: ['architecture', 'bungalow', 'cottage', 'estate', 'home', 'house', 'maps', 'place', 'real', 'residence', 'residential', 'stay', 'traveling'],
            sizes_px: [20, 24]
        }, {
            name: 'burst_mode',
            version: 10,
            popularity: 250,
            codepoint: 58428,
            unsupported_families: [],
            categories: ['image'],
            tags: ['burst', 'image', 'landscape', 'mode', 'mountain', 'mountains', 'multiple', 'photo', 'photography', 'picture'],
            sizes_px: [24]
        }, {
            name: 'bus_alert',
            version: 13,
            popularity: 309,
            codepoint: 59791,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['!', 'alert', 'attention', 'automobile', 'bus', 'car', 'cars', 'caution', 'danger', 'error', 'exclamation', 'important', 'maps', 'mark', 'notification', 'symbol', 'transportation', 'vehicle', 'warning'],
            sizes_px: [24]
        }, {
            name: 'business',
            version: 10,
            popularity: 7425,
            codepoint: 57519,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['apartment', 'architecture', 'building', 'business', 'company', 'estate', 'home', 'place', 'real', 'residence', 'residential', 'shelter'],
            sizes_px: [24]
        }, {
            name: 'business_center',
            version: 10,
            popularity: 2408,
            codepoint: 60223,
            unsupported_families: [],
            categories: ['places'],
            tags: ['bag', 'baggage', 'briefcase', 'business', 'case', 'center', 'places', 'purse', 'suitcase', 'work'],
            sizes_px: [24]
        }, {
            name: 'cabin',
            version: 2,
            popularity: 389,
            codepoint: 58761,
            unsupported_families: [],
            categories: ['places'],
            tags: ['architecture', 'cabin', 'camping', 'cottage', 'estate', 'home', 'house', 'log', 'maps', 'place', 'real', 'residence', 'residential', 'stay', 'traveling', 'wood'],
            sizes_px: [20, 24]
        }, {
            name: 'cable',
            version: 8,
            popularity: 852,
            codepoint: 61414,
            unsupported_families: [],
            categories: ['device'],
            tags: ['cable', 'connect', 'connection', 'device', 'electronics', 'usb', 'wire'],
            sizes_px: [24]
        }, {
            name: 'cached',
            version: 10,
            popularity: 3598,
            codepoint: 59498,
            unsupported_families: [],
            categories: ['action'],
            tags: ['around', 'arrows', 'cache', 'cached', 'inprogress', 'load', 'loading refresh', 'renew', 'rotate'],
            sizes_px: [24]
        }, {
            name: 'cake',
            version: 11,
            popularity: 2712,
            codepoint: 59369,
            unsupported_families: [],
            categories: ['social'],
            tags: ['baked', 'birthday', 'cake', 'candles', 'celebration', 'dessert', 'food', 'frosting', 'party', 'pastries', 'pastry', 'social', 'sweet'],
            sizes_px: [24]
        }, {
            name: 'calculate',
            version: 9,
            popularity: 3820,
            codepoint: 59999,
            unsupported_families: [],
            categories: ['content'],
            tags: ['+', '-', '=', 'calculate', 'count', 'finance calculator', 'math'],
            sizes_px: [20, 24]
        }, {
            name: 'calendar_today',
            version: 10,
            popularity: 14849,
            codepoint: 59701,
            unsupported_families: [],
            categories: ['action'],
            tags: ['calendar', 'date', 'day', 'event', 'month', 'schedule', 'today'],
            sizes_px: [24]
        }, {
            name: 'calendar_view_day',
            version: 13,
            popularity: 795,
            codepoint: 59702,
            unsupported_families: [],
            categories: ['action'],
            tags: ['calendar', 'date', 'day', 'event', 'format', 'grid', 'layout', 'month', 'schedule', 'today', 'view', 'week'],
            sizes_px: [24]
        }, {
            name: 'calendar_view_month',
            version: 8,
            popularity: 1685,
            codepoint: 61415,
            unsupported_families: [],
            categories: ['action'],
            tags: ['calendar', 'date', 'day', 'event', 'format', 'grid', 'layout', 'month', 'schedule', 'today', 'view'],
            sizes_px: [24]
        }, {
            name: 'calendar_view_week',
            version: 8,
            popularity: 801,
            codepoint: 61416,
            unsupported_families: [],
            categories: ['action'],
            tags: ['calendar', 'date', 'day', 'event', 'format', 'grid', 'layout', 'month', 'schedule', 'today', 'view', 'week'],
            sizes_px: [24]
        }, {
            name: 'call',
            version: 12,
            popularity: 18831,
            codepoint: 57520,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['call', 'cell', 'contact', 'device', 'hardware', 'mobile', 'phone', 'telephone'],
            sizes_px: [24]
        }, {
            name: 'call_end',
            version: 11,
            popularity: 1327,
            codepoint: 57521,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['call', 'cell', 'contact', 'device', 'end', 'hardware', 'mobile', 'phone', 'telephone'],
            sizes_px: [24]
        }, {
            name: 'call_made',
            version: 11,
            popularity: 717,
            codepoint: 57522,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['arrow', 'call', 'device', 'made', 'mobile'],
            sizes_px: [24]
        }, {
            name: 'call_merge',
            version: 11,
            popularity: 397,
            codepoint: 57523,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['arrow', 'call', 'device', 'merge', 'mobile'],
            sizes_px: [24]
        }, {
            name: 'call_missed',
            version: 11,
            popularity: 311,
            codepoint: 57524,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['arrow', 'call', 'device', 'missed', 'mobile'],
            sizes_px: [24]
        }, {
            name: 'call_missed_outgoing',
            version: 13,
            popularity: 316,
            codepoint: 57572,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['arrow', 'call', 'device', 'missed', 'mobile', 'outgoing'],
            sizes_px: [24]
        }, {
            name: 'call_received',
            version: 11,
            popularity: 483,
            codepoint: 57525,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['arrow', 'call', 'device', 'mobile', 'received'],
            sizes_px: [24]
        }, {
            name: 'call_split',
            version: 11,
            popularity: 688,
            codepoint: 57526,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['arrow', 'call', 'device', 'mobile', 'split'],
            sizes_px: [24]
        }, {
            name: 'call_to_action',
            version: 9,
            popularity: 334,
            codepoint: 57452,
            unsupported_families: [],
            categories: ['av'],
            tags: ['action', 'alert', 'bar', 'call', 'components', 'cta', 'design', 'info', 'information', 'interface', 'layout', 'message', 'notification', 'screen', 'site', 'to', 'ui', 'ux', 'web', 'website', 'window'],
            sizes_px: [24]
        }, {
            name: 'camera',
            version: 10,
            popularity: 1637,
            codepoint: 58287,
            unsupported_families: [],
            categories: ['image'],
            tags: ['album', 'aperture', 'camera', 'lens', 'photo', 'photography', 'picture', 'record', 'screenshot', 'shutter'],
            sizes_px: [24]
        }, {
            name: 'camera_alt',
            version: 10,
            popularity: 1774,
            codepoint: 58288,
            unsupported_families: [],
            categories: ['image'],
            tags: ['alt', 'camera', 'image', 'photo', 'photography', 'picture'],
            sizes_px: [24]
        }, {
            name: 'camera_enhance',
            version: 10,
            popularity: 1187,
            codepoint: 59644,
            unsupported_families: [],
            categories: ['action'],
            tags: ['camera', 'enhance', 'important', 'lens', 'photo', 'photography', 'picture', 'quality', 'special', 'star'],
            sizes_px: [24]
        }, {
            name: 'camera_front',
            version: 10,
            popularity: 276,
            codepoint: 58289,
            unsupported_families: [],
            categories: ['image'],
            tags: ['body', 'camera', 'front', 'human', 'lens', 'mobile', 'person', 'phone', 'photography', 'portrait', 'selfie'],
            sizes_px: [24]
        }, {
            name: 'camera_indoor',
            version: 7,
            popularity: 570,
            codepoint: 61417,
            unsupported_families: [],
            categories: ['search'],
            tags: ['architecture', 'building', 'camera', 'estate', 'film', 'filming', 'home', 'house', 'image', 'indoor', 'inside', 'motion', 'nest', 'picture', 'place', 'real', 'residence', 'residential', 'shelter', 'video', 'videography'],
            sizes_px: [24]
        }, {
            name: 'camera_outdoor',
            version: 7,
            popularity: 495,
            codepoint: 61418,
            unsupported_families: [],
            categories: ['search'],
            tags: ['architecture', 'building', 'camera', 'estate', 'film', 'filming', 'home', 'house', 'image', 'motion', 'nest', 'outdoor', 'outside', 'picture', 'place', 'real', 'residence', 'residential', 'shelter', 'video', 'videography'],
            sizes_px: [24]
        }, {
            name: 'camera_rear',
            version: 11,
            popularity: 146,
            codepoint: 58290,
            unsupported_families: [],
            categories: ['image'],
            tags: ['camera', 'front', 'lens', 'mobile', 'phone', 'photo', 'photography', 'picture', 'portrait', 'rear', 'selfie'],
            sizes_px: [24]
        }, {
            name: 'camera_roll',
            version: 10,
            popularity: 240,
            codepoint: 58291,
            unsupported_families: [],
            categories: ['image'],
            tags: ['camera', 'film', 'image', 'library', 'photo', 'photography', 'roll'],
            sizes_px: [24]
        }, {
            name: 'cameraswitch',
            version: 8,
            popularity: 948,
            codepoint: 61419,
            unsupported_families: [],
            categories: ['device'],
            tags: ['arrows', 'camera', 'cameraswitch', 'flip', 'rotate', 'swap', 'switch', 'view'],
            sizes_px: [24]
        }, {
            name: 'campaign',
            version: 10,
            popularity: 5776,
            codepoint: 61257,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['alert', 'announcement', 'campaign', 'loud', 'megaphone', 'microphone', 'notification', 'speaker'],
            sizes_px: [24]
        }, {
            name: 'cancel',
            version: 11,
            popularity: 15762,
            codepoint: 58825,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['cancel', 'circle', 'close', 'exit', 'stop', 'x'],
            sizes_px: [24]
        }, {
            name: 'cancel_presentation',
            version: 10,
            popularity: 835,
            codepoint: 57577,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['cancel', 'close', 'device', 'exit', 'no', 'present', 'presentation', 'quit', 'remove', 'screen', 'slide', 'stop', 'website', 'window', 'x'],
            sizes_px: [24]
        }, {
            name: 'cancel_schedule_send',
            version: 10,
            popularity: 566,
            codepoint: 59961,
            unsupported_families: [],
            categories: ['action'],
            tags: ['cancel', 'email', 'mail', 'no', 'quit', 'remove', 'schedule', 'send', 'share', 'stop', 'x'],
            sizes_px: [20, 24]
        }, {
            name: 'car_rental',
            version: 8,
            popularity: 530,
            codepoint: 59989,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['automobile', 'car', 'cars', 'key', 'maps', 'rental', 'transportation', 'vehicle'],
            sizes_px: [20, 24]
        }, {
            name: 'car_repair',
            version: 8,
            popularity: 412,
            codepoint: 59990,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['automobile', 'car', 'cars', 'maps', 'repair', 'transportation', 'vehicle'],
            sizes_px: [20, 24]
        }, {
            name: 'card_giftcard',
            version: 12,
            popularity: 3776,
            codepoint: 59638,
            unsupported_families: [],
            categories: ['action'],
            tags: ['account', 'balance', 'bill', 'card', 'cart', 'cash', 'certificate', 'coin', 'commerce', 'credit', 'currency', 'dollars', 'gift', 'giftcard', 'money', 'online', 'pay', 'payment', 'present', 'shopping'],
            sizes_px: [24]
        }, {
            name: 'card_membership',
            version: 12,
            popularity: 1920,
            codepoint: 59639,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bill', 'bookmark', 'card', 'cash', 'certificate', 'coin', 'commerce', 'cost', 'credit', 'currency', 'dollars', 'inance', 'loyalty', 'membership', 'money', 'online', 'pay', 'payment', 'shopping', 'subscription'],
            sizes_px: [24]
        }, {
            name: 'card_travel',
            version: 11,
            popularity: 829,
            codepoint: 59640,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bill', 'card', 'cash', 'coin', 'commerce', 'cost', 'credit', 'currency', 'dollars', 'inance', 'membership', 'miles', 'money', 'online', 'pay', 'payment', 'travel', 'trip'],
            sizes_px: [24]
        }, {
            name: 'carpenter',
            version: 4,
            popularity: 351,
            codepoint: 61944,
            unsupported_families: [],
            categories: ['places'],
            tags: ['building', 'carpenter', 'construction', 'cutting', 'handyman', 'repair', 'saw', 'tool'],
            sizes_px: [24]
        }, {
            name: 'cases',
            version: 9,
            popularity: 678,
            codepoint: 59794,
            unsupported_families: [],
            categories: ['image'],
            tags: ['bag', 'baggage', 'briefcase', 'business', 'case', 'cases', 'purse', 'suitcase'],
            sizes_px: [24]
        }, {
            name: 'casino',
            version: 11,
            popularity: 908,
            codepoint: 60224,
            unsupported_families: [],
            categories: ['places'],
            tags: ['casino', 'dice', 'dots', 'entertainment', 'gamble', 'gambling', 'game', 'games', 'luck', 'places'],
            sizes_px: [24]
        }, {
            name: 'cast',
            version: 13,
            popularity: 860,
            codepoint: 58119,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['Android', 'OS', 'airplay', 'cast', 'chrome', 'connect', 'desktop', 'device', 'display', 'hardware', 'iOS', 'mac', 'monitor', 'screen', 'screencast', 'streaming', 'television', 'tv', 'web', 'window', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'cast_connected',
            version: 11,
            popularity: 398,
            codepoint: 58120,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['Android', 'OS', 'airplay', 'cast', 'chrome', 'connect', 'desktop', 'device', 'display', 'hardware', 'iOS', 'mac', 'monitor', 'screen', 'screencast', 'streaming', 'television', 'tv', 'web', 'window', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'cast_for_education',
            version: 12,
            popularity: 899,
            codepoint: 61420,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['Android', 'OS', 'airplay', 'cast', 'chrome', 'connect', 'desktop', 'device', 'display', 'education', 'for', 'hardware', 'iOS', 'learning', 'lessons teaching', 'mac', 'monitor', 'screen', 'screencast', 'streaming', 'television', 'tv', 'web', 'window', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'catching_pokemon',
            version: 2,
            popularity: 1684,
            codepoint: 58632,
            unsupported_families: [],
            categories: ['social'],
            tags: ['catching', 'go', 'pokemon', 'pokestop', 'travel'],
            sizes_px: [20, 24]
        }, {
            name: 'category',
            version: 10,
            popularity: 5703,
            codepoint: 58740,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['categories', 'category', 'circle', 'collection', 'items', 'product', 'sort', 'square', 'triangle'],
            sizes_px: [24]
        }, {
            name: 'celebration',
            version: 9,
            popularity: 1941,
            codepoint: 60005,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['activity', 'birthday', 'celebration', 'event', 'fun', 'party'],
            sizes_px: [20, 24]
        }, {
            name: 'cell_wifi',
            version: 12,
            popularity: 375,
            codepoint: 57580,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['cell', 'connection', 'data', 'internet', 'mobile', 'network', 'phone', 'service', 'signal', 'wifi', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'center_focus_strong',
            version: 10,
            popularity: 725,
            codepoint: 58292,
            unsupported_families: [],
            categories: ['image'],
            tags: ['camera', 'center', 'focus', 'image', 'lens', 'photo', 'photography', 'strong', 'zoom'],
            sizes_px: [24]
        }, {
            name: 'center_focus_weak',
            version: 10,
            popularity: 432,
            codepoint: 58293,
            unsupported_families: [],
            categories: ['image'],
            tags: ['camera', 'center', 'focus', 'image', 'lens', 'photo', 'photography', 'weak', 'zoom'],
            sizes_px: [24]
        }, {
            name: 'chair',
            version: 8,
            popularity: 1608,
            codepoint: 61421,
            unsupported_families: [],
            categories: ['search'],
            tags: ['chair', 'comfort', 'couch', 'decoration', 'furniture', 'home', 'house', 'living', 'lounging', 'loveseat', 'room', 'seat', 'seating', 'sofa'],
            sizes_px: [24]
        }, {
            name: 'chair_alt',
            version: 7,
            popularity: 492,
            codepoint: 61422,
            unsupported_families: [],
            categories: ['search'],
            tags: ['cahir', 'furniture', 'home', 'house', 'kitchen', 'lounging', 'seating', 'table'],
            sizes_px: [24]
        }, {
            name: 'chalet',
            version: 2,
            popularity: 249,
            codepoint: 58757,
            unsupported_families: [],
            categories: ['places'],
            tags: ['architecture', 'chalet', 'cottage', 'estate', 'home', 'house', 'maps', 'place', 'real', 'residence', 'residential', 'stay', 'traveling'],
            sizes_px: [20, 24]
        }, {
            name: 'change_circle',
            version: 6,
            popularity: 2186,
            codepoint: 58087,
            unsupported_families: [],
            categories: ['content'],
            tags: ['around', 'arrows', 'change', 'circle', 'direction', 'navigation', 'rotate'],
            sizes_px: [20, 24]
        }, {
            name: 'change_history',
            version: 9,
            popularity: 1701,
            codepoint: 59499,
            unsupported_families: [],
            categories: ['action'],
            tags: ['change', 'history', 'shape', 'triangle'],
            sizes_px: [24]
        }, {
            name: 'charging_station',
            version: 6,
            popularity: 343,
            codepoint: 61853,
            unsupported_families: [],
            categories: ['places'],
            tags: ['Android', 'OS', 'battery', 'bolt', 'cell', 'charging', 'device', 'electric', 'hardware', 'iOS', 'lightning', 'mobile', 'phone', 'station', 'tablet', 'thunderbolt'],
            sizes_px: [24]
        }, {
            name: 'chat',
            version: 14,
            popularity: 7471,
            codepoint: 57527,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['bubble', 'chat', 'comment', 'communicate', 'feedback', 'message', 'speech'],
            sizes_px: [24]
        }, {
            name: 'chat_bubble',
            version: 11,
            popularity: 3823,
            codepoint: 57546,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['bubble', 'chat', 'comment', 'communicate', 'feedback', 'message', 'speech'],
            sizes_px: [24]
        }, {
            name: 'chat_bubble_outline',
            version: 14,
            popularity: 4627,
            codepoint: 57547,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['bubble', 'chat', 'comment', 'communicate', 'feedback', 'message', 'outline', 'speech'],
            sizes_px: [24]
        }, {
            name: 'check',
            version: 13,
            popularity: 10687,
            codepoint: 58826,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['check', 'complete', 'confirm', 'correct', 'done', 'enter', 'mark', 'ok', 'okay', 'purchased', 'select', 'success', 'tick', 'yes'],
            sizes_px: [24]
        }, {
            name: 'check_box',
            version: 11,
            popularity: 12130,
            codepoint: 59444,
            unsupported_families: [],
            categories: ['toggle'],
            tags: ['approved', 'box', 'button', 'check', 'component', 'control', 'form', 'mark', 'ok', 'select', 'selected', 'selection', 'tick', 'toggle', 'ui', 'yes'],
            sizes_px: [24]
        }, {
            name: 'check_box_outline_blank',
            version: 11,
            popularity: 10513,
            codepoint: 59445,
            unsupported_families: [],
            categories: ['toggle'],
            tags: ['blank', 'box', 'button', 'check', 'component', 'control', 'deselected', 'empty', 'form', 'outline', 'select', 'selection', 'square', 'tick', 'toggle', 'ui'],
            sizes_px: [24]
        }, {
            name: 'check_circle',
            version: 13,
            popularity: 47865,
            codepoint: 59500,
            unsupported_families: [],
            categories: ['action'],
            tags: ['approve', 'check', 'circle', 'complete', 'done', 'download', 'mark', 'ok', 'select', 'success', 'tick', 'upload', 'validate', 'verified', 'yes'],
            sizes_px: [24]
        }, {
            name: 'check_circle_outline',
            version: 10,
            popularity: 12251,
            codepoint: 59693,
            unsupported_families: [],
            categories: ['action'],
            tags: ['approve', 'check', 'circle', 'complete', 'done', 'finished', 'mark', 'ok', 'outline', 'select', 'tick', 'validate', 'verified', 'yes'],
            sizes_px: [24]
        }, {
            name: 'checklist',
            version: 1,
            popularity: 3019,
            codepoint: 59057,
            unsupported_families: [],
            categories: ['editor'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'checklist_rtl',
            version: 1,
            popularity: 1241,
            codepoint: 59059,
            unsupported_families: [],
            categories: ['editor'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'checkroom',
            version: 6,
            popularity: 1366,
            codepoint: 61854,
            unsupported_families: [],
            categories: ['places'],
            tags: ['checkroom', 'closet', 'clothes', 'coat check', 'hanger'],
            sizes_px: [24]
        }, {
            name: 'chevron_left',
            version: 11,
            popularity: 11984,
            codepoint: 58827,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['arrow', 'arrows', 'back', 'chevron', 'direction', 'left', 'triangle'],
            sizes_px: [24]
        }, {
            name: 'chevron_right',
            version: 11,
            popularity: 22355,
            codepoint: 58828,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['arrow', 'arrows', 'chevron', 'direction', 'forward', 'right', 'triangle'],
            sizes_px: [24]
        }, {
            name: 'child_care',
            version: 10,
            popularity: 1139,
            codepoint: 60225,
            unsupported_families: [],
            categories: ['places'],
            tags: ['babies', 'baby', 'care', 'child', 'children', 'face', 'infant', 'kids', 'newborn', 'toddler', 'young'],
            sizes_px: [24]
        }, {
            name: 'child_friendly',
            version: 10,
            popularity: 651,
            codepoint: 60226,
            unsupported_families: [],
            categories: ['places'],
            tags: ['baby', 'care', 'carriage', 'child', 'children', 'friendly', 'infant', 'kid', 'newborn', 'stroller', 'toddler', 'young'],
            sizes_px: [24]
        }, {
            name: 'chrome_reader_mode',
            version: 10,
            popularity: 783,
            codepoint: 59501,
            unsupported_families: [],
            categories: ['action'],
            tags: ['chrome', 'mode', 'read', 'reader', 'text'],
            sizes_px: [24]
        }, {
            name: 'circle',
            version: 9,
            popularity: 5519,
            codepoint: 61258,
            unsupported_families: [],
            categories: ['image'],
            tags: ['button', 'circle', 'full', 'geometry', 'moon', 'radio'],
            sizes_px: [24]
        }, {
            name: 'circle_notifications',
            version: 9,
            popularity: 2149,
            codepoint: 59796,
            unsupported_families: [],
            categories: ['action'],
            tags: ['active', 'alarm', 'alert', 'bell', 'chime', 'circle', 'notifications', 'notify', 'reminder', 'ring', 'sound'],
            sizes_px: [24]
        }, {
            name: 'class',
            version: 9,
            popularity: 1544,
            codepoint: 59502,
            unsupported_families: [],
            categories: ['action'],
            tags: ['archive', 'book', 'bookmark', 'class', 'favorite', 'label', 'library', 'read', 'reading', 'remember', 'ribbon', 'save', 'tag'],
            sizes_px: [24]
        }, {
            name: 'clean_hands',
            version: 5,
            popularity: 783,
            codepoint: 61983,
            unsupported_families: [],
            categories: ['social'],
            tags: ['bacteria', 'clean', 'disinfect', 'germs', 'gesture', 'hand', 'hands', 'sanitize', 'sanitizer'],
            sizes_px: [24]
        }, {
            name: 'cleaning_services',
            version: 10,
            popularity: 1319,
            codepoint: 61695,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['clean', 'cleaning', 'dust', 'services', 'sweep'],
            sizes_px: [20, 24]
        }, {
            name: 'clear',
            version: 10,
            popularity: 10627,
            codepoint: 57676,
            unsupported_families: [],
            categories: ['content'],
            tags: ['back', 'cancel', 'clear', 'correct', 'delete', 'erase', 'exit', 'x'],
            sizes_px: [24]
        }, {
            name: 'clear_all',
            version: 10,
            popularity: 1146,
            codepoint: 57528,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['all', 'clear', 'doc', 'document', 'format', 'lines', 'list'],
            sizes_px: [24]
        }, {
            name: 'close',
            version: 14,
            popularity: 42693,
            codepoint: 58829,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['cancel', 'close', 'exit', 'stop', 'x'],
            sizes_px: [24]
        }, {
            name: 'close_fullscreen',
            version: 5,
            popularity: 2565,
            codepoint: 61903,
            unsupported_families: [],
            categories: ['action'],
            tags: ['action', 'arrow', 'arrows', 'close', 'collapse', 'direction', 'full', 'fullscreen', 'minimize', 'screen'],
            sizes_px: [24]
        }, {
            name: 'closed_caption',
            version: 10,
            popularity: 649,
            codepoint: 57372,
            unsupported_families: [],
            categories: ['av'],
            tags: ['accessible', 'alphabet', 'caption', 'cc', 'character', 'closed', 'decoder', 'font', 'language', 'letter', 'media', 'movies', 'subtitle', 'subtitles', 'symbol', 'text', 'tv', 'type'],
            sizes_px: [24]
        }, {
            name: 'closed_caption_disabled',
            version: 6,
            popularity: 187,
            codepoint: 61916,
            unsupported_families: [],
            categories: ['av'],
            tags: ['accessible', 'alphabet', 'caption', 'cc', 'character', 'closed', 'decoder', 'disabled', 'enabled', 'font', 'language', 'letter', 'media', 'movies', 'off', 'on', 'slash', 'subtitle', 'subtitles', 'symbol', 'text', 'tv', 'type'],
            sizes_px: [24]
        }, {
            name: 'closed_caption_off',
            version: 9,
            popularity: 439,
            codepoint: 59798,
            unsupported_families: [],
            categories: ['av'],
            tags: ['accessible', 'alphabet', 'caption', 'cc', 'character', 'closed', 'decoder', 'font', 'language', 'letter', 'media', 'movies', 'off', 'outline', 'subtitle', 'subtitles', 'symbol', 'text', 'tv', 'type'],
            sizes_px: [24]
        }, {
            name: 'cloud',
            version: 10,
            popularity: 3774,
            codepoint: 58045,
            unsupported_families: [],
            categories: ['file'],
            tags: ['cloud', 'connection', 'internet', 'network', 'sky', 'upload'],
            sizes_px: [24]
        }, {
            name: 'cloud_circle',
            version: 10,
            popularity: 499,
            codepoint: 58046,
            unsupported_families: [],
            categories: ['file'],
            tags: ['app', 'application', 'backup', 'circle', 'cloud', 'connection', 'drive', 'files', 'folders', 'internet', 'network', 'sky', 'storage', 'upload'],
            sizes_px: [24]
        }, {
            name: 'cloud_done',
            version: 10,
            popularity: 1267,
            codepoint: 58047,
            unsupported_families: [],
            categories: ['file'],
            tags: ['app', 'application', 'approve', 'backup', 'check', 'cloud', 'complete', 'connection', 'done', 'drive', 'files', 'folders', 'internet', 'mark', 'network', 'ok', 'select', 'sky', 'storage', 'tick', 'upload', 'validate', 'verified', 'yes'],
            sizes_px: [24]
        }, {
            name: 'cloud_download',
            version: 10,
            popularity: 3217,
            codepoint: 58048,
            unsupported_families: [],
            categories: ['file'],
            tags: ['app', 'application', 'arrow', 'backup', 'cloud', 'connection', 'down', 'download', 'drive', 'files', 'folders', 'internet', 'network', 'sky', 'storage', 'upload'],
            sizes_px: [24]
        }, {
            name: 'cloud_off',
            version: 11,
            popularity: 961,
            codepoint: 58049,
            unsupported_families: [],
            categories: ['file'],
            tags: ['app', 'application', 'backup', 'cloud', 'connection', 'disabled', 'drive', 'enabled', 'files', 'folders', 'internet', 'network', 'off', 'offline', 'on', 'sky', 'slash', 'storage', 'upload'],
            sizes_px: [24]
        }, {
            name: 'cloud_queue',
            version: 10,
            popularity: 1132,
            codepoint: 58050,
            unsupported_families: [],
            categories: ['file'],
            tags: ['cloud', 'connection', 'internet', 'network', 'queue', 'sky', 'upload'],
            sizes_px: [24]
        }, {
            name: 'cloud_upload',
            version: 10,
            popularity: 3880,
            codepoint: 58051,
            unsupported_families: [],
            categories: ['file'],
            tags: ['app', 'application', 'arrow', 'backup', 'cloud', 'connection', 'download', 'drive', 'files', 'folders', 'internet', 'network', 'sky', 'storage', 'up', 'upload'],
            sizes_px: [24]
        }, {
            name: 'code',
            version: 9,
            popularity: 7524,
            codepoint: 59503,
            unsupported_families: [],
            categories: ['action'],
            tags: ['brackets', 'code', 'css', 'develop', 'developer', 'engineer', 'engineering', 'html', 'platform'],
            sizes_px: [24]
        }, {
            name: 'code_off',
            version: 2,
            popularity: 593,
            codepoint: 58611,
            unsupported_families: [],
            categories: ['action'],
            tags: ['brackets', 'code', 'css', 'develop', 'developer', 'disabled', 'enabled', 'engineer', 'engineering', 'html', 'off', 'on', 'platform', 'slash'],
            sizes_px: [20, 24]
        }, {
            name: 'coffee',
            version: 7,
            popularity: 1280,
            codepoint: 61423,
            unsupported_families: [],
            categories: ['search'],
            tags: ['beverage', 'coffee', 'cup', 'drink', 'mug', 'plate', 'set', 'tea'],
            sizes_px: [24]
        }, {
            name: 'coffee_maker',
            version: 7,
            popularity: 572,
            codepoint: 61424,
            unsupported_families: [],
            categories: ['search'],
            tags: ['appliances', 'beverage', 'coffee', 'cup', 'drink', 'machine', 'maker', 'mug'],
            sizes_px: [24]
        }, {
            name: 'collections',
            version: 10,
            popularity: 3616,
            codepoint: 58294,
            unsupported_families: [],
            categories: ['image'],
            tags: ['album', 'collections', 'gallery', 'image', 'landscape', 'library', 'mountain', 'mountains', 'photo', 'photography', 'picture', 'stack'],
            sizes_px: [24]
        }, {
            name: 'collections_bookmark',
            version: 10,
            popularity: 1021,
            codepoint: 58417,
            unsupported_families: [],
            categories: ['image'],
            tags: ['album', 'archive', 'bookmark', 'collections', 'favorite', 'gallery', 'label', 'library', 'read', 'reading', 'remember', 'ribbon', 'save', 'stack', 'tag'],
            sizes_px: [24]
        }, {
            name: 'color_lens',
            version: 11,
            popularity: 1229,
            codepoint: 58295,
            unsupported_families: [],
            categories: ['image'],
            tags: ['art', 'color', 'lens', 'paint', 'pallet'],
            sizes_px: [24]
        }, {
            name: 'colorize',
            version: 10,
            popularity: 713,
            codepoint: 58296,
            unsupported_families: [],
            categories: ['image'],
            tags: ['color', 'colorize', 'dropper', 'extract', 'eye', 'picker', 'tool'],
            sizes_px: [24]
        }, {
            name: 'comment',
            version: 14,
            popularity: 2772,
            codepoint: 57529,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['bubble', 'chat', 'comment', 'communicate', 'feedback', 'message', 'outline', 'speech'],
            sizes_px: [24]
        }, {
            name: 'comment_bank',
            version: 13,
            popularity: 699,
            codepoint: 59982,
            unsupported_families: [],
            categories: ['action'],
            tags: ['archive', 'bank', 'bookmark', 'bubble', 'cchat', 'comment', 'communicate', 'favorite', 'label', 'library', 'message', 'remember', 'ribbon', 'save', 'speech', 'tag'],
            sizes_px: [20, 24]
        }, {
            name: 'commute',
            version: 10,
            popularity: 1388,
            codepoint: 59712,
            unsupported_families: [],
            categories: ['action'],
            tags: ['automobile', 'car', 'commute', 'direction', 'maps', 'public', 'train', 'transportation', 'trip', 'vehicle'],
            sizes_px: [24]
        }, {
            name: 'compare',
            version: 10,
            popularity: 797,
            codepoint: 58297,
            unsupported_families: [],
            categories: ['image'],
            tags: ['adjust', 'adjustment', 'compare', 'edit', 'editing', 'edits', 'enhance', 'fix', 'image', 'images', 'photo', 'photography', 'photos', 'scan', 'settings'],
            sizes_px: [24]
        }, {
            name: 'compare_arrows',
            version: 12,
            popularity: 2461,
            codepoint: 59669,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrow', 'arrows', 'collide', 'compare', 'direction', 'left', 'pressure', 'push', 'right', 'together'],
            sizes_px: [24]
        }, {
            name: 'compass_calibration',
            version: 10,
            popularity: 253,
            codepoint: 58748,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['calibration', 'compass', 'connection', 'internet', 'location', 'maps', 'network', 'refresh', 'service', 'signal', 'wifi', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'compost',
            version: 1,
            popularity: 468,
            codepoint: 59233,
            unsupported_families: [],
            categories: ['social'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'compress',
            version: 8,
            popularity: 756,
            codepoint: 59725,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrow', 'arrows', 'collide', 'compress', 'pressure', 'push', 'together'],
            sizes_px: [24]
        }, {
            name: 'computer',
            version: 10,
            popularity: 3655,
            codepoint: 58122,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['Android', 'OS', 'chrome', 'computer', 'desktop', 'device', 'hardware', 'iOS', 'mac', 'monitor', 'web', 'window'],
            sizes_px: [24]
        }, {
            name: 'confirmation_number',
            version: 13,
            popularity: 2070,
            codepoint: 58936,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['admission', 'confirmation', 'entertainment', 'event', 'number', 'ticket'],
            sizes_px: [24]
        }, {
            name: 'connect_without_contact',
            version: 5,
            popularity: 1602,
            codepoint: 61987,
            unsupported_families: [],
            categories: ['social'],
            tags: ['communicating', 'connect', 'contact', 'distance', 'people', 'signal', 'social', 'socialize', 'without'],
            sizes_px: [24]
        }, {
            name: 'connected_tv',
            version: 9,
            popularity: 472,
            codepoint: 59800,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['Android', 'OS', 'airplay', 'chrome', 'connect', 'connected', 'desktop', 'device', 'display', 'hardware', 'iOS', 'mac', 'monitor', 'screen', 'screencast', 'streaming', 'television', 'tv', 'web', 'window', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'construction',
            version: 9,
            popularity: 5061,
            codepoint: 59964,
            unsupported_families: [],
            categories: ['social'],
            tags: ['build', 'carpenter', 'construction', 'equipment', 'fix', 'hammer', 'improvement', 'industrial', 'industry', 'repair', 'tools', 'wrench'],
            sizes_px: [20, 24]
        }, {
            name: 'contact_mail',
            version: 11,
            popularity: 3174,
            codepoint: 57552,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['account', 'address', 'avatar', 'communicate', 'contact', 'email', 'face', 'human', 'info', 'information', 'mail', 'message', 'people', 'person', 'profile', 'user'],
            sizes_px: [24]
        }, {
            name: 'contact_page',
            version: 4,
            popularity: 3279,
            codepoint: 61998,
            unsupported_families: [],
            categories: ['action'],
            tags: ['account', 'avatar', 'contact', 'data', 'doc', 'document', 'drive', 'face', 'file', 'folder', 'folders', 'human', 'page', 'people', 'person', 'profile', 'sheet', 'slide', 'storage', 'user', 'writing'],
            sizes_px: [24]
        }, {
            name: 'contact_phone',
            version: 11,
            popularity: 2115,
            codepoint: 57551,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['account', 'avatar', 'call', 'communicate', 'contact', 'face', 'human', 'info', 'information', 'message', 'mobile', 'people', 'person', 'phone', 'profile', 'user'],
            sizes_px: [24]
        }, {
            name: 'contact_support',
            version: 11,
            popularity: 5852,
            codepoint: 59724,
            unsupported_families: [],
            categories: ['action'],
            tags: ['?', 'bubble', 'chat', 'comment', 'communicate', 'contact', 'help', 'info', 'information', 'mark', 'message', 'punctuation', 'question', 'speech', 'support', 'symbol', 'vquestion mark'],
            sizes_px: [24]
        }, {
            name: 'contactless',
            version: 9,
            popularity: 1259,
            codepoint: 60017,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bluetooth', 'cash', 'connect', 'connection', 'connectivity', 'contact', 'contactless', 'credit', 'device', 'finance', 'pay', 'payment', 'signal', 'transaction', 'wifi', 'wireless'],
            sizes_px: [20, 24]
        }, {
            name: 'contacts',
            version: 9,
            popularity: 2749,
            codepoint: 57530,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['account', 'avatar', 'call', 'cell', 'contacts', 'face', 'human', 'info', 'information', 'mobile', 'people', 'person', 'phone', 'profile', 'user'],
            sizes_px: [24]
        }, {
            name: 'content_copy',
            version: 15,
            popularity: 12923,
            codepoint: 57677,
            unsupported_families: [],
            categories: ['content'],
            tags: ['content', 'copy', 'cut', 'doc', 'document', 'duplicate', 'file', 'multiple', 'past'],
            sizes_px: [24]
        }, {
            name: 'content_cut',
            version: 12,
            popularity: 1870,
            codepoint: 57678,
            unsupported_families: [],
            categories: ['content'],
            tags: ['content', 'copy', 'cut', 'doc', 'document', 'file', 'past', 'scissors', 'trim'],
            sizes_px: [24]
        }, {
            name: 'content_paste',
            version: 12,
            popularity: 3356,
            codepoint: 57679,
            unsupported_families: [],
            categories: ['content'],
            tags: ['clipboard', 'content', 'copy', 'cut', 'doc', 'document', 'file', 'multiple', 'past'],
            sizes_px: [24]
        }, {
            name: 'content_paste_off',
            version: 2,
            popularity: 382,
            codepoint: 58616,
            unsupported_families: [],
            categories: ['content'],
            tags: ['clipboard', 'content', 'disabled', 'doc', 'document', 'enabled', 'file', 'off', 'on', 'paste', 'slash'],
            sizes_px: [20, 24]
        }, {
            name: 'control_camera',
            version: 10,
            popularity: 489,
            codepoint: 57460,
            unsupported_families: [],
            categories: ['av'],
            tags: ['adjust', 'arrow', 'arrows', 'camera', 'center', 'control', 'direction', 'left', 'move', 'right'],
            sizes_px: [24]
        }, {
            name: 'control_point',
            version: 11,
            popularity: 1520,
            codepoint: 58298,
            unsupported_families: [],
            categories: ['image'],
            tags: ['+', 'add', 'circle', 'control', 'plus', 'point'],
            sizes_px: [24]
        }, {
            name: 'control_point_duplicate',
            version: 10,
            popularity: 438,
            codepoint: 58299,
            unsupported_families: [],
            categories: ['image'],
            tags: ['+', 'add', 'circle', 'control', 'duplicate', 'multiple', 'new', 'plus', 'point', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'copy_all',
            version: 6,
            popularity: 964,
            codepoint: 58092,
            unsupported_families: [],
            categories: ['content'],
            tags: ['all', 'content', 'copy', 'cut', 'doc', 'document', 'file', 'multiple', 'page', 'paper', 'past'],
            sizes_px: [20, 24]
        }, {
            name: 'copyright',
            version: 12,
            popularity: 2440,
            codepoint: 59660,
            unsupported_families: [],
            categories: ['action'],
            tags: ['alphabet', 'c', 'character', 'circle', 'copyright', 'emblem', 'font', 'legal', 'letter', 'owner', 'symbol', 'text'],
            sizes_px: [24]
        }, {
            name: 'coronavirus',
            version: 4,
            popularity: 3546,
            codepoint: 61985,
            unsupported_families: [],
            categories: ['social'],
            tags: ['19', 'bacteria', 'coronavirus', 'covid', 'disease', 'germs', 'illness', 'sick', 'social'],
            sizes_px: [24]
        }, {
            name: 'corporate_fare',
            version: 5,
            popularity: 1918,
            codepoint: 61904,
            unsupported_families: [],
            categories: ['places'],
            tags: ['architecture', 'building', 'business', 'corporate', 'estate', 'fare', 'organization', 'place', 'real', 'residence', 'residential', 'shelter'],
            sizes_px: [24]
        }, {
            name: 'cottage',
            version: 2,
            popularity: 2092,
            codepoint: 58759,
            unsupported_families: [],
            categories: ['places'],
            tags: ['architecture', 'beach', 'cottage', 'estate', 'home', 'house', 'lake', 'lodge', 'maps', 'place', 'real', 'residence', 'residential', 'stay', 'traveling'],
            sizes_px: [20, 24]
        }, {
            name: 'countertops',
            version: 4,
            popularity: 405,
            codepoint: 61943,
            unsupported_families: [],
            categories: ['places'],
            tags: ['counter', 'countertops', 'home', 'house', 'kitchen', 'sink', 'table', 'tops'],
            sizes_px: [24]
        }, {
            name: 'create',
            version: 11,
            popularity: 5462,
            codepoint: 57680,
            unsupported_families: [],
            categories: ['content'],
            tags: ['compose', 'create', 'edit', 'editing', 'input', 'new', 'pen', 'pencil', 'write', 'writing'],
            sizes_px: [24]
        }, {
            name: 'create_new_folder',
            version: 9,
            popularity: 1783,
            codepoint: 58060,
            unsupported_families: [],
            categories: ['file'],
            tags: ['+', 'add', 'create', 'data', 'doc', 'document', 'drive', 'file', 'folder', 'new', 'plus', 'sheet', 'slide', 'storage', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'credit_card',
            version: 10,
            popularity: 9980,
            codepoint: 59504,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bill', 'card', 'cash', 'coin', 'commerce', 'cost', 'credit', 'currency', 'dollars', 'finance', 'money', 'online', 'pay', 'payment', 'price', 'shopping', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'credit_card_off',
            version: 2,
            popularity: 603,
            codepoint: 58612,
            unsupported_families: [],
            categories: ['action'],
            tags: ['card', 'charge', 'commerce', 'cost', 'credit', 'disabled', 'enabled', 'finance', 'money', 'off', 'online', 'pay', 'payment', 'slash'],
            sizes_px: [20, 24]
        }, {
            name: 'credit_score',
            version: 8,
            popularity: 2340,
            codepoint: 61425,
            unsupported_families: [],
            categories: ['device'],
            tags: ['approve', 'bill', 'card', 'cash', 'check', 'coin', 'commerce', 'complete', 'cost', 'credit', 'currency', 'dollars', 'done', 'finance', 'loan', 'mark', 'money', 'ok', 'online', 'pay', 'payment', 'score', 'select', 'symbol', 'tick', 'validate', 'verified', 'yes'],
            sizes_px: [24]
        }, {
            name: 'crib',
            version: 2,
            popularity: 238,
            codepoint: 58760,
            unsupported_families: [],
            categories: ['places'],
            tags: ['babies', 'baby', 'bassinet', 'bed', 'child', 'children', 'cradle', 'crib', 'infant', 'kid', 'newborn', 'sleeping', 'toddler'],
            sizes_px: [20, 24]
        }, {
            name: 'crop',
            version: 10,
            popularity: 819,
            codepoint: 58302,
            unsupported_families: [],
            categories: ['image'],
            tags: ['adjust', 'adjustments', 'area', 'crop', 'edit', 'editing', 'frame', 'image', 'images', 'photo', 'photos', 'rectangle', 'settings', 'size', 'square'],
            sizes_px: [24]
        }, {
            name: 'crop_16_9',
            version: 10,
            popularity: 282,
            codepoint: 58300,
            unsupported_families: [],
            categories: ['image'],
            tags: ['16', '9', 'adjust', 'adjustments', 'area', 'by', 'crop', 'edit', 'editing', 'frame', 'image', 'images', 'photo', 'photos', 'rectangle', 'settings', 'size', 'square'],
            sizes_px: [24]
        }, {
            name: 'crop_3_2',
            version: 10,
            popularity: 223,
            codepoint: 58301,
            unsupported_families: [],
            categories: ['image'],
            tags: ['2', '3', 'adjust', 'adjustments', 'area', 'by', 'crop', 'edit', 'editing', 'frame', 'image', 'images', 'photo', 'photos', 'rectangle', 'settings', 'size', 'square'],
            sizes_px: [24]
        }, {
            name: 'crop_5_4',
            version: 10,
            popularity: 219,
            codepoint: 58303,
            unsupported_families: [],
            categories: ['image'],
            tags: ['4', '5', 'adjust', 'adjustments', 'area', 'by', 'crop', 'edit', 'editing settings', 'frame', 'image', 'images', 'photo', 'photos', 'rectangle', 'size', 'square'],
            sizes_px: [24]
        }, {
            name: 'crop_7_5',
            version: 10,
            popularity: 262,
            codepoint: 58304,
            unsupported_families: [],
            categories: ['image'],
            tags: ['5', '7', 'adjust', 'adjustments', 'area', 'by', 'crop', 'editing', 'frame', 'image', 'images', 'photo', 'photos', 'rectangle', 'settings', 'size', 'square'],
            sizes_px: [24]
        }, {
            name: 'crop_din',
            version: 10,
            popularity: 441,
            codepoint: 58305,
            unsupported_families: [],
            categories: ['image'],
            tags: ['adjust', 'adjustments', 'area', 'crop', 'din', 'edit', 'editing', 'frame', 'image', 'images', 'photo', 'photos', 'rectangle', 'settings', 'size', 'square'],
            sizes_px: [24]
        }, {
            name: 'crop_free',
            version: 10,
            popularity: 896,
            codepoint: 58306,
            unsupported_families: [],
            categories: ['image'],
            tags: ['adjust', 'adjustments', 'crop', 'edit', 'editing', 'focus', 'frame', 'free', 'image', 'photo', 'photos', 'settings', 'size', 'zoom'],
            sizes_px: [24]
        }, {
            name: 'crop_landscape',
            version: 10,
            popularity: 223,
            codepoint: 58307,
            unsupported_families: [],
            categories: ['image'],
            tags: ['adjust', 'adjustments', 'area', 'crop', 'edit', 'editing', 'frame', 'image', 'images', 'landscape', 'photo', 'photos', 'settings', 'size'],
            sizes_px: [24]
        }, {
            name: 'crop_original',
            version: 11,
            popularity: 654,
            codepoint: 58308,
            unsupported_families: [],
            categories: ['image'],
            tags: ['adjust', 'adjustments', 'area', 'crop', 'edit', 'editing', 'frame', 'image', 'images', 'original', 'photo', 'photos', 'picture', 'settings', 'size'],
            sizes_px: [24]
        }, {
            name: 'crop_portrait',
            version: 10,
            popularity: 225,
            codepoint: 58309,
            unsupported_families: [],
            categories: ['image'],
            tags: ['adjust', 'adjustments', 'area', 'crop', 'edit', 'editing', 'frame', 'image', 'images', 'photo', 'photos', 'portrait', 'rectangle', 'settings', 'size', 'square'],
            sizes_px: [24]
        }, {
            name: 'crop_rotate',
            version: 10,
            popularity: 272,
            codepoint: 58423,
            unsupported_families: [],
            categories: ['image'],
            tags: ['adjust', 'adjustments', 'area', 'arrow', 'arrows', 'crop', 'edit', 'editing', 'frame', 'image', 'images', 'photo', 'photos', 'rotate', 'settings', 'size', 'turn'],
            sizes_px: [24]
        }, {
            name: 'crop_square',
            version: 10,
            popularity: 1066,
            codepoint: 58310,
            unsupported_families: [],
            categories: ['image'],
            tags: ['adjust', 'adjustments', 'area', 'crop', 'edit', 'editing', 'frame', 'image', 'images', 'photo', 'photos', 'rectangle', 'settings', 'size', 'square'],
            sizes_px: [24]
        }, {
            name: 'dangerous',
            version: 10,
            popularity: 2358,
            codepoint: 59802,
            unsupported_families: [],
            categories: ['action'],
            tags: ['broken', 'danger', 'dangerous', 'fix', 'no', 'sign', 'stop', 'update', 'warning', 'wrong', 'x'],
            sizes_px: [20, 24]
        }, {
            name: 'dark_mode',
            version: 2,
            popularity: 4996,
            codepoint: 58652,
            unsupported_families: [],
            categories: ['device'],
            tags: ['app', 'application', 'dark', 'device', 'interface', 'mode', 'moon', 'night', 'silent', 'theme', 'ui', 'ux', 'website'],
            sizes_px: [20, 24]
        }, {
            name: 'dashboard',
            version: 11,
            popularity: 15589,
            codepoint: 59505,
            unsupported_families: [],
            categories: ['action'],
            tags: ['cards', 'dashboard', 'format', 'layout', 'rectangle', 'shapes', 'square', 'web', 'website'],
            sizes_px: [24]
        }, {
            name: 'dashboard_customize',
            version: 9,
            popularity: 2756,
            codepoint: 59803,
            unsupported_families: [],
            categories: ['action'],
            tags: ['cards', 'customize', 'dashboard', 'format', 'layout', 'rectangle', 'shapes', 'square', 'web', 'website'],
            sizes_px: [24]
        },  {
            name: 'data_saver_off',
            version: 8,
            popularity: 402,
            codepoint: 61426,
            unsupported_families: [],
            categories: ['device'],
            tags: ['analytics', 'bar', 'bars', 'chart', 'data', 'diagram', 'donut', 'graph', 'infographic', 'measure', 'metrics', 'off', 'on', 'ring', 'saver', 'statistics', 'tracking'],
            sizes_px: [24]
        }, {
            name: 'data_saver_on',
            version: 8,
            popularity: 380,
            codepoint: 61427,
            unsupported_families: [],
            categories: ['device'],
            tags: ['+', 'add', 'analytics', 'chart', 'data', 'diagram', 'graph', 'infographic', 'measure', 'metrics', 'new', 'on', 'plus', 'ring', 'saver', 'statistics', 'symbol', 'tracking'],
            sizes_px: [24]
        }, {
            name: 'data_usage',
            version: 10,
            popularity: 775,
            codepoint: 57775,
            unsupported_families: [],
            categories: ['device'],
            tags: ['analytics', 'chart', 'data', 'diagram', 'graph', 'infographic', 'measure', 'metrics', 'statistics', 'tracking', 'usage'],
            sizes_px: [24]
        }, {
            name: 'date_range',
            version: 10,
            popularity: 12067,
            codepoint: 59670,
            unsupported_families: [],
            categories: ['action'],
            tags: ['calendar', 'date', 'day', 'event', 'month', 'range', 'remember', 'reminder', 'schedule', 'time', 'today', 'week'],
            sizes_px: [24]
        }, {
            name: 'deck',
            version: 9,
            popularity: 805,
            codepoint: 59970,
            unsupported_families: [],
            categories: ['social'],
            tags: ['chairs', 'deck', 'home', 'house', 'outdoors', 'outside', 'patio', 'social', 'terrace', 'umbrella', 'yard'],
            sizes_px: [20, 24]
        }, {
            name: 'dehaze',
            version: 10,
            popularity: 760,
            codepoint: 58311,
            unsupported_families: [],
            categories: ['image'],
            tags: ['adjust', 'dehaze', 'edit', 'editing', 'enhance', 'haze', 'image', 'lines', 'photo', 'photography', 'remove'],
            sizes_px: [24]
        }, {
            name: 'delete',
            version: 12,
            popularity: 39059,
            codepoint: 59506,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bin', 'can', 'delete', 'garbage', 'remove', 'trash'],
            sizes_px: [24]
        }, {
            name: 'delete_forever',
            version: 13,
            popularity: 6968,
            codepoint: 59691,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bin', 'can', 'cancel', 'delete', 'exit', 'forever', 'garbage', 'remove', 'trash', 'x'],
            sizes_px: [24]
        }, {
            name: 'delete_outline',
            version: 9,
            popularity: 8710,
            codepoint: 59694,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bin', 'can', 'delete', 'garbage', 'outline', 'remove', 'trash'],
            sizes_px: [24]
        }, {
            name: 'delete_sweep',
            version: 10,
            popularity: 1320,
            codepoint: 57708,
            unsupported_families: [],
            categories: ['content'],
            tags: ['bin', 'can', 'delete', 'garbage', 'remove', 'sweep', 'trash'],
            sizes_px: [24]
        }, {
            name: 'delivery_dining',
            version: 10,
            popularity: 1829,
            codepoint: 60018,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['delivery', 'dining', 'food', 'meal', 'restaurant', 'scooter', 'takeout', 'transportation', 'vehicle', 'vespa'],
            sizes_px: [20, 24]
        }, {
            name: 'departure_board',
            version: 9,
            popularity: 521,
            codepoint: 58742,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['automobile', 'board', 'bus', 'car', 'cars', 'clock', 'departure', 'maps', 'public', 'schedule', 'time', 'transportation', 'travel', 'vehicle'],
            sizes_px: [24]
        }, {
            name: 'description',
            version: 10,
            popularity: 25252,
            codepoint: 59507,
            unsupported_families: [],
            categories: ['action'],
            tags: ['article', 'data', 'description', 'doc', 'document', 'drive', 'file', 'folder', 'folders', 'notes', 'page', 'paper', 'sheet', 'slide', 'text', 'writing'],
            sizes_px: [24]
        }, {
            name: 'design_services',
            version: 10,
            popularity: 1803,
            codepoint: 61706,
            unsupported_families: [],
            categories: ['maps'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'desktop_access_disabled',
            version: 9,
            popularity: 313,
            codepoint: 59805,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['Android', 'OS', 'access', 'chrome', 'desktop', 'device', 'disabled', 'display', 'enabled', 'hardware', 'iOS', 'mac', 'monitor', 'off', 'offline', 'on', 'screen', 'slash', 'web', 'window'],
            sizes_px: [24]
        }, {
            name: 'desktop_mac',
            version: 11,
            popularity: 639,
            codepoint: 58123,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['Android', 'OS', 'chrome', 'desktop', 'device', 'display', 'hardware', 'iOS', 'mac', 'monitor', 'screen', 'web', 'window'],
            sizes_px: [24]
        }, {
            name: 'desktop_windows',
            version: 10,
            popularity: 2792,
            codepoint: 58124,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['Android', 'OS', 'chrome', 'desktop', 'device', 'display', 'hardware', 'iOS', 'mac', 'monitor', 'screen', 'television', 'tv', 'web', 'window', 'windows'],
            sizes_px: [24]
        }, {
            name: 'details',
            version: 14,
            popularity: 592,
            codepoint: 58312,
            unsupported_families: [],
            categories: ['image'],
            tags: ['details', 'edit', 'editing', 'enhance', 'image', 'photo', 'photography', 'sharpen', 'triangle'],
            sizes_px: [24]
        }, {
            name: 'developer_board',
            version: 11,
            popularity: 1161,
            codepoint: 58125,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['board', 'chip', 'computer', 'developer', 'development', 'hardware', 'microchip', 'processor'],
            sizes_px: [24]
        }, {
            name: 'developer_board_off',
            version: 2,
            popularity: 166,
            codepoint: 58623,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['board', 'chip', 'computer', 'developer', 'development', 'disabled', 'enabled', 'hardware', 'microchip', 'off', 'on', 'processor', 'slash'],
            sizes_px: [20, 24]
        }, {
            name: 'developer_mode',
            version: 10,
            popularity: 708,
            codepoint: 57776,
            unsupported_families: [],
            categories: ['device'],
            tags: ['Android', 'OS', 'bracket', 'cell', 'code', 'developer', 'development', 'device', 'engineer', 'hardware', 'iOS', 'mobile', 'mode', 'phone', 'tablet'],
            sizes_px: [24]
        }, {
            name: 'device_hub',
            version: 10,
            popularity: 919,
            codepoint: 58165,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['Android', 'OS', 'circle', 'computer', 'desktop', 'device', 'hardware', 'hub', 'iOS', 'laptop', 'mobile', 'monitor', 'phone', 'square', 'tablet', 'triangle', 'watch', 'wearable', 'web'],
            sizes_px: [24]
        }, {
            name: 'device_thermostat',
            version: 9,
            popularity: 882,
            codepoint: 57855,
            unsupported_families: [],
            categories: ['device'],
            tags: ['celsius', 'device', 'fahrenheit', 'meter', 'temp', 'temperature', 'thermometer', 'thermostat'],
            sizes_px: [24]
        }, {
            name: 'device_unknown',
            version: 10,
            popularity: 382,
            codepoint: 58169,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['?', 'Android', 'OS', 'assistance', 'cell', 'device', 'hardware', 'help', 'iOS', 'info', 'information', 'mobile', 'phone', 'punctuation', 'question mark', 'support', 'symbol', 'tablet', 'unknown'],
            sizes_px: [24]
        }, {
            name: 'devices',
            version: 11,
            popularity: 3353,
            codepoint: 57777,
            unsupported_families: [],
            categories: ['device'],
            tags: ['Android', 'OS', 'computer', 'desktop', 'device', 'hardware', 'iOS', 'laptop', 'mobile', 'monitor', 'phone', 'tablet', 'watch', 'wearable', 'web'],
            sizes_px: [24]
        }, {
            name: 'devices_other',
            version: 10,
            popularity: 732,
            codepoint: 58167,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['Android', 'OS', 'ar', 'cell', 'chrome', 'desktop', 'device', 'gadget', 'hardware', 'iOS', 'ipad', 'mac', 'mobile', 'monitor', 'other', 'phone', 'tablet', 'vr', 'watch', 'wearables', 'window'],
            sizes_px: [24]
        }, {
            name: 'dialer_sip',
            version: 10,
            popularity: 241,
            codepoint: 57531,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['alphabet', 'call', 'cell', 'character', 'contact', 'device', 'dialer', 'font', 'hardware', 'initiation', 'internet', 'letter', 'mobile', 'over', 'phone', 'protocol', 'routing', 'session', 'sip', 'symbol', 'telephone', 'text', 'type', 'voice'],
            sizes_px: [24]
        }, {
            name: 'dialpad',
            version: 10,
            popularity: 1078,
            codepoint: 57532,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['buttons', 'call', 'contact', 'device', 'dial', 'dialpad', 'dots', 'mobile', 'numbers', 'pad', 'phone'],
            sizes_px: [24]
        }, {
            name: 'dining',
            version: 7,
            popularity: 662,
            codepoint: 61428,
            unsupported_families: [],
            categories: ['search'],
            tags: ['cafe', 'cafeteria', 'cutlery', 'diner', 'dining', 'eat', 'eating', 'fork', 'room', 'spoon'],
            sizes_px: [24]
        }, {
            name: 'dinner_dining',
            version: 8,
            popularity: 733,
            codepoint: 59991,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['breakfast', 'dining', 'dinner', 'food', 'fork', 'lunch', 'meal', 'restaurant', 'spaghetti', 'utensils'],
            sizes_px: [20, 24]
        }, {
            name: 'directions',
            version: 10,
            popularity: 1242,
            codepoint: 58670,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['arrow', 'directions', 'maps', 'right', 'route', 'sign', 'traffic'],
            sizes_px: [24]
        }, {
            name: 'directions_bike',
            version: 11,
            popularity: 1949,
            codepoint: 58671,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['bicycle', 'bike', 'direction', 'directions', 'human', 'maps', 'person', 'public', 'route', 'transportation'],
            sizes_px: [24]
        }, {
            name: 'directions_boat',
            version: 15,
            popularity: 1025,
            codepoint: 58674,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['automobile', 'boat', 'car', 'cars', 'direction', 'directions', 'ferry', 'maps', 'public', 'transportation', 'vehicle'],
            sizes_px: [24]
        }, {
            name: 'directions_boat_filled',
            version: 14,
            popularity: 456,
            codepoint: 61429,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['automobile', 'boat', 'car', 'cars', 'direction', 'directions', 'ferry', 'filled', 'maps', 'public', 'transportation', 'vehicle'],
            sizes_px: [24]
        }, {
            name: 'directions_bus',
            version: 10,
            popularity: 1585,
            codepoint: 58672,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['automobile', 'bus', 'car', 'cars', 'directions', 'maps', 'public', 'transportation', 'vehicle'],
            sizes_px: [24]
        }, {
            name: 'directions_bus_filled',
            version: 8,
            popularity: 678,
            codepoint: 61430,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['automobile', 'bus', 'car', 'cars', 'direction', 'directions', 'filled', 'maps', 'public', 'transportation', 'vehicle'],
            sizes_px: [24]
        }, {
            name: 'directions_car',
            version: 13,
            popularity: 4670,
            codepoint: 58673,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['automobile', 'car', 'cars', 'direction', 'directions', 'maps', 'public', 'transportation', 'vehicle'],
            sizes_px: [24]
        }, {
            name: 'directions_car_filled',
            version: 8,
            popularity: 1656,
            codepoint: 61431,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['automobile', 'car', 'cars', 'direction', 'directions', 'filled', 'maps', 'public', 'transportation', 'vehicle'],
            sizes_px: [24]
        }, {
            name: 'directions_off',
            version: 10,
            popularity: 138,
            codepoint: 61711,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['arrow', 'directions', 'disabled', 'enabled', 'maps', 'off', 'on', 'right', 'route', 'sign', 'slash', 'traffic'],
            sizes_px: [24]
        }, {
            name: 'directions_railway',
            version: 11,
            popularity: 236,
            codepoint: 58676,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['automobile', 'car', 'cars', 'direction', 'directions', 'maps', 'public', 'railway', 'train', 'transportation', 'vehicle'],
            sizes_px: [24]
        }, {
            name: 'directions_railway_filled',
            version: 8,
            popularity: 162,
            codepoint: 61432,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['automobile', 'car', 'cars', 'direction', 'directions', 'filled', 'maps', 'public', 'railway', 'train', 'transportation', 'vehicle'],
            sizes_px: [24]
        }, {
            name: 'directions_run',
            version: 11,
            popularity: 2914,
            codepoint: 58726,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['body', 'directions', 'human', 'jogging', 'maps', 'people', 'person', 'route', 'run', 'running', 'walk'],
            sizes_px: [24]
        }, {
            name: 'directions_subway',
            version: 10,
            popularity: 262,
            codepoint: 58675,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['automobile', 'car', 'cars', 'direction', 'directions', 'maps', 'public', 'rail', 'subway', 'train', 'transportation', 'vehicle'],
            sizes_px: [24]
        }, {
            name: 'directions_subway_filled',
            version: 8,
            popularity: 162,
            codepoint: 61433,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['automobile', 'car', 'cars', 'direction', 'directions', 'filled', 'maps', 'public', 'rail', 'subway', 'train', 'transportation', 'vehicle'],
            sizes_px: [24]
        }, {
            name: 'directions_transit',
            version: 10,
            popularity: 391,
            codepoint: 58677,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['automobile', 'car', 'cars', 'direction', 'directions', 'maps', 'public', 'rail', 'subway', 'train', 'transit', 'transportation', 'vehicle'],
            sizes_px: [24]
        }, {
            name: 'directions_transit_filled',
            version: 8,
            popularity: 201,
            codepoint: 61434,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['automobile', 'car', 'cars', 'direction', 'directions', 'filled', 'maps', 'public', 'rail', 'subway', 'train', 'transit', 'transportation', 'vehicle'],
            sizes_px: [24]
        }, {
            name: 'directions_walk',
            version: 11,
            popularity: 2203,
            codepoint: 58678,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['body', 'direction', 'directions', 'human', 'jogging', 'maps', 'people', 'person', 'route', 'run', 'walk'],
            sizes_px: [24]
        }, {
            name: 'dirty_lens',
            version: 13,
            popularity: 136,
            codepoint: 61259,
            unsupported_families: [],
            categories: ['image'],
            tags: ['camera', 'dirty', 'lens', 'photo', 'photography', 'picture', 'splat'],
            sizes_px: [24]
        }, {
            name: 'disabled_by_default',
            version: 4,
            popularity: 2160,
            codepoint: 62000,
            unsupported_families: [],
            categories: ['action'],
            tags: ['box', 'by', 'cancel', 'close', 'default', 'disabled', 'exit', 'no', 'quit', 'remove', 'square', 'stop', 'x'],
            sizes_px: [24]
        }, {
            name: 'disc_full',
            version: 10,
            popularity: 227,
            codepoint: 58896,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['!', 'alert', 'attention', 'caution', 'cd', 'danger', 'disc', 'error', 'exclamation', 'full', 'important', 'mark', 'music', 'notification', 'storage', 'symbol', 'warning'],
            sizes_px: [24]
        }, {
            name: 'dns',
            version: 10,
            popularity: 3859,
            codepoint: 59509,
            unsupported_families: [],
            categories: ['action'],
            tags: ['address', 'bars', 'dns', 'domain', 'information', 'ip', 'list', 'lookup', 'name', 'server', 'system'],
            sizes_px: [24]
        }, {
            name: 'do_disturb',
            version: 8,
            popularity: 577,
            codepoint: 61580,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['cancel', 'close', 'denied', 'deny', 'disturb', 'do', 'remove', 'silence', 'stop'],
            sizes_px: [24]
        }, {
            name: 'do_disturb_alt',
            version: 9,
            popularity: 430,
            codepoint: 61581,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['cancel', 'close', 'denied', 'deny', 'disturb', 'do', 'remove', 'silence', 'stop'],
            sizes_px: [24]
        }, {
            name: 'do_disturb_off',
            version: 8,
            popularity: 196,
            codepoint: 61582,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['cancel', 'close', 'denied', 'deny', 'disabled', 'disturb', 'do', 'enabled', 'off', 'on', 'remove', 'silence', 'slash', 'stop'],
            sizes_px: [24]
        }, {
            name: 'do_disturb_on',
            version: 8,
            popularity: 737,
            codepoint: 61583,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['cancel', 'close', 'denied', 'deny', 'disabled', 'disturb', 'do', 'enabled', 'off', 'on', 'remove', 'silence', 'slash', 'stop'],
            sizes_px: [24]
        }, {
            name: 'do_not_disturb',
            version: 9,
            popularity: 973,
            codepoint: 58898,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['cancel', 'close', 'denied', 'deny', 'disturb', 'do', 'remove', 'silence', 'stop'],
            sizes_px: [24]
        }, {
            name: 'do_not_disturb_alt',
            version: 10,
            popularity: 380,
            codepoint: 58897,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['cancel', 'close', 'denied', 'deny', 'disturb', 'do', 'remove', 'silence', 'stop'],
            sizes_px: [24]
        }, {
            name: 'do_not_disturb_off',
            version: 9,
            popularity: 198,
            codepoint: 58947,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['cancel', 'close', 'denied', 'deny', 'disabled', 'disturb', 'do', 'enabled', 'off', 'on', 'remove', 'silence', 'slash', 'stop'],
            sizes_px: [24]
        }, {
            name: 'do_not_disturb_on',
            version: 9,
            popularity: 1198,
            codepoint: 58948,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['cancel', 'close', 'denied', 'deny', 'disabled', 'disturb', 'do', 'enabled', 'off', 'on', 'remove', 'silence', 'slash', 'stop'],
            sizes_px: [24]
        }, {
            name: 'do_not_disturb_on_total_silence',
            version: 13,
            popularity: 276,
            codepoint: 61435,
            unsupported_families: [],
            categories: ['device'],
            tags: ['busy', 'disturb', 'do', 'mute', 'no', 'not', 'on total', 'quiet', 'silence'],
            sizes_px: [24]
        }, {
            name: 'do_not_step',
            version: 6,
            popularity: 207,
            codepoint: 61855,
            unsupported_families: [],
            categories: ['places'],
            tags: ['boot', 'disabled', 'do', 'enabled', 'feet', 'foot', 'not', 'off', 'on', 'shoe', 'slash', 'sneaker', 'step'],
            sizes_px: [24]
        }, {
            name: 'do_not_touch',
            version: 6,
            popularity: 283,
            codepoint: 61872,
            unsupported_families: [],
            categories: ['places'],
            tags: ['disabled', 'do', 'enabled', 'fingers', 'gesture', 'hand', 'not', 'off', 'on', 'slash', 'touch'],
            sizes_px: [24]
        }, {
            name: 'dock',
            version: 10,
            popularity: 190,
            codepoint: 58126,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['Android', 'OS', 'cell', 'charging', 'connector', 'device', 'dock', 'hardware', 'iOS', 'mobile', 'phone', 'power', 'station', 'tablet'],
            sizes_px: [24]
        }, {
            name: 'document_scanner',
            version: 1,
            popularity: 1349,
            codepoint: 58874,
            unsupported_families: [],
            categories: ['communication'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'domain',
            version: 11,
            popularity: 1826,
            codepoint: 59374,
            unsupported_families: [],
            categories: ['social'],
            tags: ['apartment', 'architecture', 'building', 'business', 'domain', 'estate', 'home', 'place', 'real', 'residence', 'residential', 'shelter', 'web', 'www'],
            sizes_px: [24]
        }, {
            name: 'domain_disabled',
            version: 10,
            popularity: 302,
            codepoint: 57583,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['apartment', 'architecture', 'building', 'business', 'company', 'disabled', 'domain', 'enabled', 'estate', 'home', 'internet', 'maps', 'off', 'office', 'offline', 'on', 'place', 'real', 'residence', 'residential', 'slash', 'web', 'website'],
            sizes_px: [24]
        }, {
            name: 'domain_verification',
            version: 9,
            popularity: 598,
            codepoint: 61260,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['app', 'application desktop', 'approve', 'check', 'complete', 'design', 'domain', 'done', 'interface', 'internet', 'layout', 'mark', 'ok', 'screen', 'select', 'site', 'tick', 'ui', 'ux', 'validate', 'verification', 'verified', 'web', 'website', 'window', 'www', 'yes'],
            sizes_px: [20, 24]
        }, {
            name: 'done',
            version: 14,
            popularity: 64820,
            codepoint: 59510,
            unsupported_families: [],
            categories: ['action'],
            tags: ['approve', 'check', 'complete', 'done', 'mark', 'ok', 'select', 'tick', 'validate', 'verified', 'yes'],
            sizes_px: [24]
        }, {
            name: 'done_all',
            version: 10,
            popularity: 5667,
            codepoint: 59511,
            unsupported_families: [],
            categories: ['action'],
            tags: ['all', 'approve', 'check', 'complete', 'done', 'layers', 'mark', 'multiple', 'ok', 'select', 'stack', 'tick', 'validate', 'verified', 'yes'],
            sizes_px: [24]
        }, {
            name: 'done_outline',
            version: 10,
            popularity: 5300,
            codepoint: 59695,
            unsupported_families: [],
            categories: ['action'],
            tags: ['all', 'approve', 'check', 'complete', 'done', 'mark', 'ok', 'outline', 'select', 'tick', 'validate', 'verified', 'yes'],
            sizes_px: [24]
        }, {
            name: 'donut_large',
            version: 11,
            popularity: 1510,
            codepoint: 59671,
            unsupported_families: [],
            categories: ['action'],
            tags: ['analytics', 'chart', 'data', 'diagram', 'donut', 'graph', 'infographic', 'inprogress', 'large', 'measure', 'metrics', 'pie', 'statistics', 'tracking'],
            sizes_px: [24]
        }, {
            name: 'donut_small',
            version: 10,
            popularity: 1057,
            codepoint: 59672,
            unsupported_families: [],
            categories: ['action'],
            tags: ['analytics', 'chart', 'data', 'diagram', 'donut', 'graph', 'infographic', 'inprogress', 'measure', 'metrics', 'pie', 'small', 'statistics', 'tracking'],
            sizes_px: [24]
        }, {
            name: 'door_back',
            version: 8,
            popularity: 486,
            codepoint: 61436,
            unsupported_families: [],
            categories: ['search'],
            tags: ['back', 'closed', 'door', 'doorway', 'entrance', 'exit', 'home', 'house', 'way'],
            sizes_px: [24]
        }, {
            name: 'door_front',
            version: 8,
            popularity: 812,
            codepoint: 61437,
            unsupported_families: [],
            categories: ['search'],
            tags: ['closed', 'door', 'doorway', 'entrance', 'exit', 'front', 'home', 'house', 'way'],
            sizes_px: [24]
        }, {
            name: 'door_sliding',
            version: 8,
            popularity: 500,
            codepoint: 61438,
            unsupported_families: [],
            categories: ['search'],
            tags: ['auto', 'automatic', 'door', 'doorway', 'double', 'entrance', 'exit', 'glass', 'home', 'house', 'sliding', 'two'],
            sizes_px: [24]
        }, {
            name: 'doorbell',
            version: 8,
            popularity: 488,
            codepoint: 61439,
            unsupported_families: [],
            categories: ['search'],
            tags: ['alarm', 'bell', 'door', 'doorbell', 'home', 'house', 'ringing'],
            sizes_px: [24]
        }, {
            name: 'double_arrow',
            version: 9,
            popularity: 4405,
            codepoint: 59984,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['arrow', 'arrows', 'direction', 'double', 'multiple', 'navigation', 'right'],
            sizes_px: [20, 24]
        }, {
            name: 'downhill_skiing',
            version: 2,
            popularity: 506,
            codepoint: 58633,
            unsupported_families: [],
            categories: ['social'],
            tags: ['athlete', 'athletic', 'body', 'downhill', 'entertainment', 'exercise', 'hobby', 'human', 'people', 'person', 'ski social', 'skiing', 'snow', 'sports', 'travel', 'winter'],
            sizes_px: [20, 24]
        }, {
            name: 'download',
            version: 8,
            popularity: 7815,
            codepoint: 61584,
            unsupported_families: [],
            categories: ['file'],
            tags: ['arrow', 'down', 'download', 'downloads', 'drive', 'install', 'upload'],
            sizes_px: [24]
        }, {
            name: 'download_done',
            version: 8,
            popularity: 1049,
            codepoint: 61585,
            unsupported_families: [],
            categories: ['file'],
            tags: ['arrow', 'arrows', 'check', 'done', 'down', 'download', 'downloads', 'drive', 'install', 'installed', 'ok', 'tick', 'upload'],
            sizes_px: [24]
        }, {
            name: 'download_for_offline',
            version: 7,
            popularity: 2024,
            codepoint: 61440,
            unsupported_families: [],
            categories: ['file'],
            tags: ['arrow', 'circle', 'down', 'download', 'for offline', 'install', 'upload'],
            sizes_px: [24]
        }, {
            name: 'downloading',
            version: 7,
            popularity: 1536,
            codepoint: 61441,
            unsupported_families: [],
            categories: ['file'],
            tags: ['arrow', 'circle', 'down', 'download', 'downloading', 'downloads', 'install', 'pending', 'progress', 'upload'],
            sizes_px: [24]
        }, {
            name: 'drafts',
            version: 12,
            popularity: 1511,
            codepoint: 57681,
            unsupported_families: [],
            categories: ['content'],
            tags: ['document', 'draft', 'drafts', 'email', 'file', 'letter', 'mail', 'message', 'read'],
            sizes_px: [24]
        }, {
            name: 'drag_handle',
            version: 12,
            popularity: 2901,
            codepoint: 57949,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['app', 'application ui', 'components', 'design', 'drag', 'handle', 'interface', 'layout', 'menu', 'move', 'screen', 'site', 'ui', 'ux', 'web', 'website', 'window'],
            sizes_px: [24]
        }, {
            name: 'drag_indicator',
            version: 10,
            popularity: 4711,
            codepoint: 59717,
            unsupported_families: [],
            categories: ['action'],
            tags: ['app', 'application', 'circles', 'components', 'design', 'dots', 'drag', 'drop', 'indicator', 'interface', 'layout', 'mobile', 'monitor', 'move', 'phone', 'screen', 'shape', 'shift', 'site', 'tablet', 'ui', 'ux', 'web', 'website', 'window'],
            sizes_px: [24]
        }, {
            name: 'draw',
            version: 4,
            popularity: 1166,
            codepoint: 59206,
            unsupported_families: [],
            categories: ['editor'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'drive_eta',
            version: 10,
            popularity: 1098,
            codepoint: 58899,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['automobile', 'car', 'cars', 'destination', 'direction', 'drive', 'estimate', 'eta', 'maps', 'public', 'transportation', 'travel', 'trip', 'vehicle'],
            sizes_px: [24]
        }, {
            name: 'drive_file_move',
            version: 14,
            popularity: 864,
            codepoint: 58997,
            unsupported_families: [],
            categories: ['file'],
            tags: ['arrow', 'arrows', 'data', 'direction', 'doc', 'document', 'drive', 'file', 'folder', 'folders', 'move', 'right', 'sheet', 'side', 'slide', 'storage'],
            sizes_px: [24]
        }, {
            name: 'drive_file_move_rtl',
            version: 1,
            popularity: 183,
            codepoint: 59245,
            unsupported_families: [],
            categories: ['file'],
            tags: ['drive', 'file', 'move'],
            sizes_px: [20, 24]
        }, {
            name: 'drive_file_rename_outline',
            version: 10,
            popularity: 2542,
            codepoint: 59810,
            unsupported_families: [],
            categories: ['file'],
            tags: ['compose', 'create', 'draft', 'drive', 'edit', 'editing', 'file', 'input', 'pen', 'pencil', 'rename', 'write', 'writing'],
            sizes_px: [24]
        }, {
            name: 'drive_folder_upload',
            version: 9,
            popularity: 882,
            codepoint: 59811,
            unsupported_families: [],
            categories: ['file'],
            tags: ['arrow', 'data', 'doc', 'document', 'drive', 'file', 'folder', 'sheet', 'slide', 'storage', 'up', 'upload'],
            sizes_px: [24]
        }, {
            name: 'dry',
            version: 6,
            popularity: 227,
            codepoint: 61875,
            unsupported_families: [],
            categories: ['places'],
            tags: ['air', 'bathroom', 'dry', 'dryer', 'fingers', 'gesture', 'hand', 'wc'],
            sizes_px: [24]
        }, {
            name: 'dry_cleaning',
            version: 8,
            popularity: 435,
            codepoint: 59992,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['cleaning', 'dry', 'hanger', 'hotel', 'laundry', 'places', 'service', 'towel'],
            sizes_px: [20, 24]
        }, {
            name: 'duo',
            version: 10,
            popularity: 574,
            codepoint: 59813,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['call', 'chat', 'conference', 'device', 'duo', 'video'],
            sizes_px: [24]
        }, {
            name: 'dvr',
            version: 11,
            popularity: 1068,
            codepoint: 57778,
            unsupported_families: [],
            categories: ['device'],
            tags: ['Android', 'OS', 'audio', 'chrome', 'computer', 'desktop', 'device', 'display', 'dvr', 'electronic', 'hardware', 'iOS', 'list', 'mac', 'monitor', 'record', 'recorder', 'screen', 'tv', 'video', 'web', 'window'],
            sizes_px: [24]
        }, {
            name: 'dynamic_feed',
            version: 13,
            popularity: 1048,
            codepoint: 59924,
            unsupported_families: [],
            categories: ['content'],
            tags: ['dynamic', 'feed', 'layer', 'multiple', 'post'],
            sizes_px: [20, 24]
        }, {
            name: 'dynamic_form',
            version: 5,
            popularity: 978,
            codepoint: 61887,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bolt', 'code', 'dynamic', 'electric', 'fast', 'form', 'lightning', 'lists', 'questionnaire', 'thunderbolt'],
            sizes_px: [24]
        }, {
            name: 'e_mobiledata',
            version: 7,
            popularity: 119,
            codepoint: 61442,
            unsupported_families: [],
            categories: ['device'],
            tags: ['alphabet', 'data', 'e', 'font', 'letter', 'mobile', 'mobiledata', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'earbuds',
            version: 7,
            popularity: 314,
            codepoint: 61443,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['accessory', 'audio', 'earbuds', 'earphone', 'headphone', 'listen', 'music', 'sound'],
            sizes_px: [24]
        }, {
            name: 'earbuds_battery',
            version: 7,
            popularity: 202,
            codepoint: 61444,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['accessory', 'audio', 'battery', 'charging', 'earbuds', 'earphone', 'headphone', 'listen', 'music', 'sound'],
            sizes_px: [24]
        }, {
            name: 'east',
            version: 5,
            popularity: 6000,
            codepoint: 61919,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['arrow', 'directional', 'east', 'maps', 'navigation', 'right'],
            sizes_px: [24]
        }, {
            name: 'edgesensor_high',
            version: 8,
            popularity: 182,
            codepoint: 61445,
            unsupported_families: [],
            categories: ['device'],
            tags: ['Android', 'OS', 'cell', 'device', 'edge', 'hardware', 'high', 'iOS', 'mobile', 'move', 'phone', 'sensitivity', 'sensor', 'tablet', 'vibrate'],
            sizes_px: [24]
        }, {
            name: 'edgesensor_low',
            version: 8,
            popularity: 163,
            codepoint: 61446,
            unsupported_families: [],
            categories: ['device'],
            tags: ['Android', 'cell', 'device', 'edge', 'hardware', 'iOS', 'low', 'mobile', 'move', 'phone', 'sensitivity', 'sensor', 'tablet', 'vibrate'],
            sizes_px: [24]
        }, {
            name: 'edit',
            version: 10,
            popularity: 29969,
            codepoint: 58313,
            unsupported_families: [],
            categories: ['image'],
            tags: ['compose', 'create', 'edit', 'editing', 'input', 'new', 'pen', 'pencil', 'write', 'writing'],
            sizes_px: [24]
        }, {
            name: 'edit_attributes',
            version: 10,
            popularity: 420,
            codepoint: 58744,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['approve', 'attribution', 'check', 'complete', 'done', 'edit', 'mark', 'ok', 'select', 'tick', 'validate', 'verified', 'yes'],
            sizes_px: [24]
        }, {
            name: 'edit_calendar',
            version: 3,
            popularity: 2741,
            codepoint: 59202,
            unsupported_families: [],
            categories: ['action'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'edit_location',
            version: 14,
            popularity: 539,
            codepoint: 58728,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['destination', 'direction', 'edit', 'location', 'maps', 'pen', 'pencil', 'pin', 'place', 'stop'],
            sizes_px: [24]
        }, {
            name: 'edit_location_alt',
            version: 6,
            popularity: 465,
            codepoint: 57797,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['alt', 'edit', 'location', 'pen', 'pencil', 'pin'],
            sizes_px: [20, 24]
        }, {
            name: 'edit_note',
            version: 3,
            popularity: 4000,
            codepoint: 59205,
            unsupported_families: [],
            categories: ['editor'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'edit_notifications',
            version: 2,
            popularity: 630,
            codepoint: 58661,
            unsupported_families: [],
            categories: ['social'],
            tags: ['active', 'alarm', 'alert', 'bell', 'chime', 'compose', 'create', 'draft', 'edit', 'editing', 'input', 'new', 'notifications', 'notify', 'pen', 'pencil', 'reminder', 'ring', 'sound', 'write', 'writing'],
            sizes_px: [20, 24]
        }, {
            name: 'edit_off',
            version: 10,
            popularity: 1006,
            codepoint: 59728,
            unsupported_families: [],
            categories: ['action'],
            tags: ['compose', 'create', 'disabled', 'draft', 'edit', 'editing', 'enabled', 'input', 'new', 'off', 'offline', 'on', 'pen', 'pencil', 'slash', 'write', 'writing'],
            sizes_px: [24]
        }, {
            name: 'edit_road',
            version: 9,
            popularity: 529,
            codepoint: 61261,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['destination', 'direction', 'edit', 'highway', 'maps', 'pen', 'pencil', 'road', 'street', 'traffic'],
            sizes_px: [20, 24]
        }, {
            name: 'eject',
            version: 9,
            popularity: 535,
            codepoint: 59643,
            unsupported_families: [],
            categories: ['action'],
            tags: ['disc', 'drive', 'dvd', 'eject', 'remove', 'triangle', 'usb'],
            sizes_px: [24]
        }, {
            name: 'elderly',
            version: 5,
            popularity: 695,
            codepoint: 61978,
            unsupported_families: [],
            categories: ['social'],
            tags: ['body', 'cane', 'elderly', 'human', 'old', 'people', 'person', 'senior'],
            sizes_px: [24]
        }, {
            name: 'electric_bike',
            version: 12,
            popularity: 331,
            codepoint: 60187,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['automobile', 'bike', 'car', 'cars', 'maps', 'scooter', 'transportation', 'vehicle', 'vespa'],
            sizes_px: [20, 24]
        }, {
            name: 'electric_car',
            version: 12,
            popularity: 489,
            codepoint: 60188,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['automobile', 'car', 'cars', 'electric', 'electricity', 'maps', 'transportation', 'vehicle'],
            sizes_px: [20, 24]
        }, {
            name: 'electric_moped',
            version: 12,
            popularity: 248,
            codepoint: 60189,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['automobile', 'bike', 'car', 'cars', 'maps', 'scooter', 'transportation', 'vehicle', 'vespa'],
            sizes_px: [20, 24]
        }, {
            name: 'electric_rickshaw',
            version: 13,
            popularity: 215,
            codepoint: 60190,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['automobile', 'car', 'cars', 'india', 'maps', 'transportation', 'vehicle'],
            sizes_px: [20, 24]
        }, {
            name: 'electric_scooter',
            version: 12,
            popularity: 350,
            codepoint: 60191,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['automobile', 'bike', 'car', 'cars', 'maps', 'scooter', 'transportation', 'vehicle', 'vespa'],
            sizes_px: [20, 24]
        }, {
            name: 'electrical_services',
            version: 10,
            popularity: 1102,
            codepoint: 61698,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['charge', 'cord', 'electric', 'electrical', 'plug', 'power', 'services', 'wire'],
            sizes_px: [20, 24]
        }, {
            name: 'elevator',
            version: 6,
            popularity: 367,
            codepoint: 61856,
            unsupported_families: [],
            categories: ['places'],
            tags: ['body', 'down', 'elevator', 'human', 'people', 'person', 'up'],
            sizes_px: [24]
        }, {
            name: 'email',
            version: 13,
            popularity: 29099,
            codepoint: 57534,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['email', 'envelop', 'letter', 'mail', 'message', 'send'],
            sizes_px: [24]
        }, {
            name: 'emergency',
            version: 3,
            popularity: 563,
            codepoint: 57835,
            unsupported_families: [],
            categories: ['maps'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'emoji_emotions',
            version: 9,
            popularity: 3767,
            codepoint: 59938,
            unsupported_families: [],
            categories: ['social'],
            tags: ['emoji', 'emotions', 'expressions', 'face', 'feelings', 'glad', 'happiness', 'happy', 'like', 'mood', 'person', 'pleased', 'smile', 'smiling', 'social', 'survey'],
            sizes_px: [20, 24]
        }, {
            name: 'emoji_events',
            version: 11,
            popularity: 9221,
            codepoint: 59939,
            unsupported_families: [],
            categories: ['social'],
            tags: ['achievement', 'award', 'chalice', 'champion', 'cup', 'emoji', 'events', 'first', 'prize', 'reward', 'sport', 'trophy', 'winner'],
            sizes_px: [20, 24]
        }, {
            name: 'emoji_flags',
            version: 9,
            popularity: 901,
            codepoint: 59930,
            unsupported_families: [],
            categories: ['social'],
            tags: ['country', 'destination', 'emoji', 'flags', 'landmark', 'location', 'mark', 'milepost', 'milestone', 'nation', 'place', 'pole', 'save', 'social', 'world'],
            sizes_px: [20, 24]
        }, {
            name: 'emoji_food_beverage',
            version: 9,
            popularity: 842,
            codepoint: 59931,
            unsupported_families: [],
            categories: ['social'],
            tags: ['beverage', 'coffee', 'cup', 'drink', 'emoji', 'mug', 'plate', 'set', 'tea'],
            sizes_px: [20, 24]
        }, {
            name: 'emoji_nature',
            version: 9,
            popularity: 1322,
            codepoint: 59932,
            unsupported_families: [],
            categories: ['social'],
            tags: ['animal', 'bee', 'bug', 'daisy', 'emoji', 'flower', 'insect', 'ladybug', 'nature', 'petals', 'spring', 'summer'],
            sizes_px: [20, 24]
        }, {
            name: 'emoji_objects',
            version: 9,
            popularity: 3275,
            codepoint: 59940,
            unsupported_families: [],
            categories: ['social'],
            tags: ['bulb', 'creative', 'emoji', 'idea', 'light', 'objects', 'solution', 'thinking'],
            sizes_px: [20, 24]
        }, {
            name: 'emoji_people',
            version: 9,
            popularity: 2233,
            codepoint: 59933,
            unsupported_families: [],
            categories: ['social'],
            tags: ['arm', 'body', 'emoji', 'greeting', 'human', 'people', 'person', 'social', 'waving'],
            sizes_px: [20, 24]
        }, {
            name: 'emoji_symbols',
            version: 9,
            popularity: 1240,
            codepoint: 59934,
            unsupported_families: [],
            categories: ['social'],
            tags: ['ampersand', 'character', 'emoji', 'hieroglyph', 'music', 'note', 'percent', 'sign', 'symbols'],
            sizes_px: [20, 24]
        }, {
            name: 'emoji_transportation',
            version: 9,
            popularity: 787,
            codepoint: 59935,
            unsupported_families: [],
            categories: ['social'],
            tags: ['architecture', 'automobile', 'building', 'car', 'cars', 'direction', 'emoji', 'estate', 'maps', 'place', 'public', 'real', 'residence', 'residential', 'shelter', 'transportation', 'travel', 'vehicle'],
            sizes_px: [20, 24]
        }, {
            name: 'engineering',
            version: 9,
            popularity: 5240,
            codepoint: 59965,
            unsupported_families: [],
            categories: ['social'],
            tags: ['body', 'cogs', 'cogwheel', 'construction', 'engineering', 'fixing', 'gears', 'hat', 'helmet', 'human', 'maintenance', 'people', 'person', 'setting', 'worker'],
            sizes_px: [20, 24]
        }, {
            name: 'enhanced_encryption',
            version: 14,
            popularity: 723,
            codepoint: 58943,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['+', 'add', 'encryption', 'enhanced', 'lock', 'locked', 'new', 'password', 'plus', 'privacy', 'private', 'protection', 'safety', 'secure', 'security', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'equalizer',
            version: 10,
            popularity: 2000,
            codepoint: 57373,
            unsupported_families: [],
            categories: ['av'],
            tags: ['adjustment', 'analytics', 'chart', 'data', 'equalizer', 'graph', 'measure', 'metrics', 'music', 'noise', 'sound', 'static', 'statistics', 'tracking', 'volume'],
            sizes_px: [24]
        }, {
            name: 'error',
            version: 15,
            popularity: 9837,
            codepoint: 57344,
            unsupported_families: [],
            categories: ['alert'],
            tags: ['!', 'alert', 'attention', 'caution', 'circle', 'danger', 'error', 'exclamation', 'important', 'mark', 'notification', 'symbol', 'warning'],
            sizes_px: [24]
        }, {
            name: 'error_outline',
            version: 11,
            popularity: 8161,
            codepoint: 57345,
            unsupported_families: [],
            categories: ['alert'],
            tags: ['!', 'alert', 'attention', 'caution', 'circle', 'danger', 'error', 'exclamation', 'important', 'mark', 'notification', 'outline', 'symbol', 'warning'],
            sizes_px: [24]
        }, {
            name: 'escalator',
            version: 6,
            popularity: 230,
            codepoint: 61857,
            unsupported_families: [],
            categories: ['places'],
            tags: ['down', 'escalator', 'staircase', 'up'],
            sizes_px: [24]
        }, {
            name: 'escalator_warning',
            version: 6,
            popularity: 708,
            codepoint: 61868,
            unsupported_families: [],
            categories: ['places'],
            tags: ['body', 'child', 'escalator', 'human', 'kid', 'parent', 'people', 'person', 'warning'],
            sizes_px: [24]
        }, {
            name: 'euro',
            version: 9,
            popularity: 1984,
            codepoint: 59925,
            unsupported_families: [],
            categories: ['image'],
            tags: ['bill', 'card', 'cash', 'coin', 'commerce', 'cost', 'credit', 'currency', 'dollars', 'euro', 'euros', 'finance', 'money', 'online', 'pay', 'payment', 'price', 'shopping', 'symbol'],
            sizes_px: [20, 24]
        }, {
            name: 'euro_symbol',
            version: 10,
            popularity: 2739,
            codepoint: 59686,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bill', 'card', 'cash', 'coin', 'commerce', 'cost', 'credit', 'currency', 'dollars', 'euro', 'finance', 'money', 'online', 'pay', 'payment', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'ev_station',
            version: 9,
            popularity: 487,
            codepoint: 58733,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['automobile', 'car', 'cars', 'charging', 'electric', 'electricity', 'ev', 'maps', 'places', 'station', 'transportation', 'vehicle'],
            sizes_px: [24]
        }, {
            name: 'event',
            version: 14,
            popularity: 15846,
            codepoint: 59512,
            unsupported_families: [],
            categories: ['action'],
            tags: ['calendar', 'date', 'day', 'event', 'mark', 'month', 'range', 'remember', 'reminder', 'today', 'week'],
            sizes_px: [24]
        }, {
            name: 'event_available',
            version: 12,
            popularity: 3911,
            codepoint: 58900,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['approve', 'available', 'calendar', 'check', 'complete', 'date', 'done', 'event', 'mark', 'ok', 'schedule', 'select', 'tick', 'time', 'validate', 'verified', 'yes'],
            sizes_px: [24]
        }, {
            name: 'event_busy',
            version: 15,
            popularity: 1173,
            codepoint: 58901,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['busy', 'calendar', 'cancel', 'close', 'date', 'event', 'exit', 'no', 'remove', 'schedule', 'stop', 'time', 'unavailable', 'x'],
            sizes_px: [24]
        }, {
            name: 'event_note',
            version: 12,
            popularity: 2737,
            codepoint: 58902,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['calendar', 'date', 'event', 'note', 'schedule', 'text', 'time', 'writing'],
            sizes_px: [24]
        }, {
            name: 'event_seat',
            version: 14,
            popularity: 969,
            codepoint: 59651,
            unsupported_families: [],
            categories: ['action'],
            tags: ['assign', 'assigned', 'chair', 'event', 'furniture', 'reservation', 'row', 'seat', 'section', 'sit'],
            sizes_px: [24]
        }, {
            name: 'exit_to_app',
            version: 11,
            popularity: 4727,
            codepoint: 59513,
            unsupported_families: [],
            categories: ['action'],
            tags: ['app', 'application', 'arrow', 'components', 'design', 'exit', 'export', 'interface', 'layout', 'leave', 'mobile', 'monitor', 'move', 'phone', 'screen', 'site', 'tablet', 'to', 'ui', 'ux', 'web', 'website', 'window'],
            sizes_px: [24]
        }, {
            name: 'expand',
            version: 9,
            popularity: 1566,
            codepoint: 59727,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrow', 'arrows', 'compress', 'enlarge', 'expand', 'grow', 'move', 'push', 'together'],
            sizes_px: [24]
        }, {
            name: 'expand_less',
            version: 10,
            popularity: 10656,
            codepoint: 58830,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['arrow', 'arrows', 'chevron', 'collapse', 'direction', 'expand', 'expandable', 'less', 'list', 'up'],
            sizes_px: [24]
        }, {
            name: 'expand_more',
            version: 12,
            popularity: 35140,
            codepoint: 58831,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['arrow', 'arrows', 'chevron', 'collapse', 'direction', 'down', 'expand', 'expandable', 'list', 'more'],
            sizes_px: [24]
        }, {
            name: 'explicit',
            version: 10,
            popularity: 244,
            codepoint: 57374,
            unsupported_families: [],
            categories: ['av'],
            tags: ['adult', 'alphabet', 'character', 'content', 'e', 'explicit', 'font', 'language', 'letter', 'media', 'movies', 'music', 'parent', 'rating', 'supervision', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'explore',
            version: 10,
            popularity: 5980,
            codepoint: 59514,
            unsupported_families: [],
            categories: ['action'],
            tags: ['compass', 'destination', 'direction', 'east', 'explore', 'location', 'maps', 'needle', 'north', 'south', 'travel', 'west'],
            sizes_px: [24]
        }, {
            name: 'explore_off',
            version: 10,
            popularity: 367,
            codepoint: 59816,
            unsupported_families: [],
            categories: ['action'],
            tags: ['compass', 'destination', 'direction', 'disabled', 'east', 'enabled', 'explore', 'location', 'maps', 'needle', 'north', 'off', 'on', 'slash', 'south', 'travel', 'west'],
            sizes_px: [24]
        }, {
            name: 'exposure',
            version: 10,
            popularity: 275,
            codepoint: 58314,
            unsupported_families: [],
            categories: ['image'],
            tags: ['add', 'brightness', 'contrast', 'edit', 'editing', 'effect', 'exposure', 'image', 'minus', 'photo', 'photography', 'picture', 'plus', 'settings', 'subtract'],
            sizes_px: [24]
        }, {
            name: 'exposure_neg_1',
            version: 11,
            popularity: 152,
            codepoint: 58315,
            unsupported_families: [],
            categories: ['image'],
            tags: ['1', 'brightness', 'contrast', 'digit', 'edit', 'editing', 'effect', 'exposure', 'image', 'neg', 'negative', 'number', 'photo', 'photography', 'settings', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'exposure_neg_2',
            version: 11,
            popularity: 137,
            codepoint: 58316,
            unsupported_families: [],
            categories: ['image'],
            tags: ['2', 'brightness', 'contrast', 'digit', 'edit', 'editing', 'effect', 'exposure', 'image', 'neg', 'negative', 'number', 'photo', 'photography', 'settings', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'exposure_plus_1',
            version: 10,
            popularity: 323,
            codepoint: 58317,
            unsupported_families: [],
            categories: ['image'],
            tags: ['1', 'add', 'brightness', 'contrast', 'digit', 'edit', 'editing', 'effect', 'exposure', 'image', 'number', 'photo', 'photography', 'plus', 'settings', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'exposure_plus_2',
            version: 10,
            popularity: 183,
            codepoint: 58318,
            unsupported_families: [],
            categories: ['image'],
            tags: ['2', 'add', 'brightness', 'contrast', 'digit', 'edit', 'editing', 'effect', 'exposure', 'image', 'number', 'photo', 'photography', 'plus', 'settings', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'exposure_zero',
            version: 10,
            popularity: 175,
            codepoint: 58319,
            unsupported_families: [],
            categories: ['image'],
            tags: ['0', 'brightness', 'contrast', 'digit', 'edit', 'editing', 'effect', 'exposure', 'image', 'number', 'photo', 'photography', 'settings', 'symbol', 'zero'],
            sizes_px: [24]
        }, {
            name: 'extension',
            version: 10,
            popularity: 3442,
            codepoint: 59515,
            unsupported_families: [],
            categories: ['action'],
            tags: ['app', 'extended', 'extension', 'game', 'jigsaw', 'plugin add', 'puzzle', 'shape'],
            sizes_px: [24]
        }, {
            name: 'extension_off',
            version: 2,
            popularity: 321,
            codepoint: 58613,
            unsupported_families: [],
            categories: ['action'],
            tags: ['disabled', 'enabled', 'extended', 'extension', 'jigsaw', 'off', 'on', 'piece', 'puzzle', 'shape', 'slash'],
            sizes_px: [20, 24]
        }, {
            name: 'face',
            version: 13,
            popularity: 36578,
            codepoint: 59516,
            unsupported_families: [],
            categories: ['action'],
            tags: ['account', 'emoji', 'eyes', 'face', 'human', 'lock', 'log', 'login', 'logout', 'people', 'person', 'profile', 'recognition', 'security', 'social', 'thumbnail', 'unlock', 'user'],
            sizes_px: [24]
        }, {
            name: 'face_retouching_natural',
            version: 14,
            popularity: 755,
            codepoint: 61262,
            unsupported_families: [],
            categories: ['image'],
            tags: ['edit', 'editing', 'effect', 'emoji', 'emotion', 'face', 'faces', 'image', 'natural', 'photo', 'photography', 'retouch', 'retouching', 'settings', 'star', 'tag'],
            sizes_px: [24]
        }, {
            name: 'face_retouching_off',
            version: 13,
            popularity: 181,
            codepoint: 61447,
            unsupported_families: [],
            categories: ['image'],
            tags: ['disabled', 'edit', 'editing', 'effect', 'emoji', 'emotion', 'enabled', 'face', 'faces', 'image', 'natural', 'off', 'on', 'photo', 'photography', 'retouch', 'retouching', 'settings', 'slash', 'tag'],
            sizes_px: [24]
        }, {
            name: 'facebook',
            version: 4,
            popularity: 26459,
            codepoint: 62004,
            unsupported_families: [],
            categories: ['social'],
            tags: ['application', 'apps', 'f', 'facebook', 'logo', 'post', 'social'],
            sizes_px: [24]
        }, {
            name: 'fact_check',
            version: 12,
            popularity: 9323,
            codepoint: 61637,
            unsupported_families: [],
            categories: ['action'],
            tags: ['approve', 'check', 'complete', 'done', 'fact', 'list', 'mark', 'ok', 'select', 'tick', 'validate', 'verified', 'yes'],
            sizes_px: [20, 24]
        }, {
            name: 'family_restroom',
            version: 7,
            popularity: 1658,
            codepoint: 61858,
            unsupported_families: [],
            categories: ['places'],
            tags: ['bathroom', 'child', 'children', 'family', 'father', 'kids', 'mother', 'parents', 'restroom', 'wc'],
            sizes_px: [24]
        }, {
            name: 'fast_forward',
            version: 13,
            popularity: 2022,
            codepoint: 57375,
            unsupported_families: [],
            categories: ['av'],
            tags: ['control', 'fast', 'ff', 'forward', 'media', 'music', 'play', 'speed', 'time', 'tv', 'video'],
            sizes_px: [24]
        }, {
            name: 'fast_rewind',
            version: 10,
            popularity: 1143,
            codepoint: 57376,
            unsupported_families: [],
            categories: ['av'],
            tags: ['back', 'control', 'fast', 'media', 'music', 'play', 'rewind', 'speed', 'time', 'tv', 'video'],
            sizes_px: [24]
        }, {
            name: 'fastfood',
            version: 10,
            popularity: 1668,
            codepoint: 58746,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['drink', 'fastfood', 'food', 'hamburger', 'maps', 'meal', 'places'],
            sizes_px: [24]
        }, {
            name: 'favorite',
            version: 12,
            popularity: 34709,
            codepoint: 59517,
            unsupported_families: [],
            categories: ['action'],
            tags: ['appreciate', 'favorite', 'heart', 'like', 'love', 'remember', 'save', 'shape'],
            sizes_px: [24]
        }, {
            name: 'favorite_border',
            version: 10,
            popularity: 25397,
            codepoint: 59518,
            unsupported_families: [],
            categories: ['action'],
            tags: ['border', 'favorite', 'heart', 'like', 'love', 'outline', 'remember', 'save', 'shape'],
            sizes_px: [24]
        }, {
            name: 'featured_play_list',
            version: 10,
            popularity: 486,
            codepoint: 57453,
            unsupported_families: [],
            categories: ['av'],
            tags: ['collection', 'featured', 'highlighted', 'list', 'music', 'play', 'playlist', 'recommended'],
            sizes_px: [24]
        }, {
            name: 'featured_video',
            version: 10,
            popularity: 305,
            codepoint: 57454,
            unsupported_families: [],
            categories: ['av'],
            tags: ['advertised', 'advertisment', 'featured', 'highlighted', 'recommended', 'video', 'watch'],
            sizes_px: [24]
        }, {
            name: 'feed',
            version: 8,
            popularity: 4812,
            codepoint: 61449,
            unsupported_families: [],
            categories: ['search'],
            tags: ['article', 'feed', 'headline', 'information', 'news', 'newspaper', 'paper', 'public', 'social', 'timeline'],
            sizes_px: [24]
        }, {
            name: 'feedback',
            version: 10,
            popularity: 4720,
            codepoint: 59519,
            unsupported_families: [],
            categories: ['action'],
            tags: ['!', 'alert', 'announcement', 'attention', 'bubble', 'caution', 'chat', 'comment', 'communicate', 'danger', 'error', 'exclamation', 'feedback', 'important', 'mark', 'message', 'notification', 'speech', 'symbol', 'warning'],
            sizes_px: [24]
        }, {
            name: 'female',
            version: 1,
            popularity: 2040,
            codepoint: 58768,
            unsupported_families: [],
            categories: ['social'],
            tags: ['female', 'gender', 'girl', 'lady', 'social', 'symbol', 'woman', 'women'],
            sizes_px: [20, 24]
        }, {
            name: 'fence',
            version: 4,
            popularity: 301,
            codepoint: 61942,
            unsupported_families: [],
            categories: ['places'],
            tags: ['backyard', 'barrier', 'boundaries', 'boundary', 'fence', 'home', 'house', 'protection', 'yard'],
            sizes_px: [24]
        }, {
            name: 'festival',
            version: 8,
            popularity: 502,
            codepoint: 60008,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['circus', 'event', 'festival', 'local', 'maps', 'places', 'tent', 'tour', 'travel'],
            sizes_px: [20, 24]
        }, {
            name: 'fiber_dvr',
            version: 11,
            popularity: 124,
            codepoint: 57437,
            unsupported_families: [],
            categories: ['av'],
            tags: ['alphabet', 'character', 'digital', 'dvr', 'electronics', 'fiber', 'font', 'letter', 'network', 'record', 'recorder', 'symbol', 'text', 'tv', 'type', 'video'],
            sizes_px: [24]
        }, {
            name: 'fiber_manual_record',
            version: 11,
            popularity: 2434,
            codepoint: 57441,
            unsupported_families: [],
            categories: ['av'],
            tags: ['circle', 'dot', 'fiber', 'manual', 'play', 'record', 'watch'],
            sizes_px: [24]
        }, {
            name: 'fiber_new',
            version: 11,
            popularity: 877,
            codepoint: 57438,
            unsupported_families: [],
            categories: ['av'],
            tags: ['alphabet', 'character', 'fiber', 'font', 'letter', 'network', 'new', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'fiber_pin',
            version: 10,
            popularity: 140,
            codepoint: 57450,
            unsupported_families: [],
            categories: ['av'],
            tags: ['alphabet', 'character', 'fiber', 'font', 'letter', 'network', 'pin', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'fiber_smart_record',
            version: 10,
            popularity: 224,
            codepoint: 57442,
            unsupported_families: [],
            categories: ['av'],
            tags: ['circle', 'dot', 'fiber', 'play', 'record', 'smart', 'watch'],
            sizes_px: [24]
        }, {
            name: 'file_copy',
            version: 10,
            popularity: 2966,
            codepoint: 57715,
            unsupported_families: [],
            categories: ['content'],
            tags: ['content', 'copy', 'cut', 'doc', 'document', 'duplicate', 'file', 'multiple', 'past'],
            sizes_px: [24]
        }, {
            name: 'file_download',
            version: 9,
            popularity: 18234,
            codepoint: 58052,
            unsupported_families: [],
            categories: ['file'],
            tags: ['arrow', 'arrows', 'down', 'download', 'downloads', 'drive', 'export', 'file', 'install', 'upload'],
            sizes_px: [24]
        }, {
            name: 'file_download_done',
            version: 9,
            popularity: 831,
            codepoint: 59818,
            unsupported_families: [],
            categories: ['file'],
            tags: ['arrow', 'arrows', 'check', 'done', 'down', 'download', 'downloads', 'drive', 'file', 'install', 'installed', 'tick', 'upload'],
            sizes_px: [24]
        }, {
            name: 'file_download_off',
            version: 2,
            popularity: 400,
            codepoint: 58622,
            unsupported_families: [],
            categories: ['file'],
            tags: ['arrow', 'disabled', 'down', 'download', 'drive', 'enabled', 'export', 'file', 'install', 'off', 'on', 'save', 'slash', 'upload'],
            sizes_px: [20, 24]
        }, {
            name: 'file_present',
            version: 8,
            popularity: 1938,
            codepoint: 59918,
            unsupported_families: [],
            categories: ['action'],
            tags: ['clip', 'data', 'doc', 'document', 'drive', 'file', 'folder', 'folders', 'note', 'paper', 'present', 'reminder', 'sheet', 'slide', 'storage', 'writing'],
            sizes_px: [24]
        }, {
            name: 'file_upload',
            version: 9,
            popularity: 9246,
            codepoint: 58054,
            unsupported_families: [],
            categories: ['file'],
            tags: ['arrow', 'arrows', 'download', 'drive', 'export', 'file', 'up', 'upload'],
            sizes_px: [24]
        }, {
            name: 'filter',
            version: 10,
            popularity: 446,
            codepoint: 58323,
            unsupported_families: [],
            categories: ['image'],
            tags: ['edit', 'editing', 'effect', 'filter', 'image', 'landscape', 'mountain', 'mountains', 'photo', 'photography', 'picture', 'settings'],
            sizes_px: [24]
        }, {
            name: 'filter_1',
            version: 10,
            popularity: 535,
            codepoint: 58320,
            unsupported_families: [],
            categories: ['image'],
            tags: ['1', 'digit', 'edit', 'editing', 'effect', 'filter', 'image', 'images', 'multiple', 'number', 'photography', 'picture', 'pictures', 'settings', 'stack', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'filter_2',
            version: 10,
            popularity: 317,
            codepoint: 58321,
            unsupported_families: [],
            categories: ['image'],
            tags: ['2', 'digit', 'edit', 'editing', 'effect', 'filter', 'image', 'images', 'multiple', 'number', 'photography', 'picture', 'pictures', 'settings', 'stack', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'filter_3',
            version: 10,
            popularity: 253,
            codepoint: 58322,
            unsupported_families: [],
            categories: ['image'],
            tags: ['3', 'digit', 'edit', 'editing', 'effect', 'filter', 'image', 'images', 'multiple', 'number', 'photography', 'picture', 'pictures', 'settings', 'stack', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'filter_4',
            version: 10,
            popularity: 186,
            codepoint: 58324,
            unsupported_families: [],
            categories: ['image'],
            tags: ['4', 'digit', 'edit', 'editing', 'effect', 'filter', 'image', 'images', 'multiple', 'number', 'photography', 'picture', 'pictures', 'settings', 'stack', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'filter_5',
            version: 10,
            popularity: 199,
            codepoint: 58325,
            unsupported_families: [],
            categories: ['image'],
            tags: ['5', 'digit', 'edit', 'editing', 'effect', 'filter', 'image', 'images', 'multiple', 'number', 'photography', 'picture', 'pictures', 'settings', 'stack', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'filter_6',
            version: 10,
            popularity: 161,
            codepoint: 58326,
            unsupported_families: [],
            categories: ['image'],
            tags: ['6', 'digit', 'edit', 'editing', 'effect', 'filter', 'image', 'images', 'multiple', 'number', 'photography', 'picture', 'pictures', 'settings', 'stack', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'filter_7',
            version: 10,
            popularity: 212,
            codepoint: 58327,
            unsupported_families: [],
            categories: ['image'],
            tags: ['7', 'digit', 'edit', 'editing', 'effect', 'filter', 'image', 'images', 'multiple', 'number', 'photography', 'picture', 'pictures', 'settings', 'stack', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'filter_8',
            version: 10,
            popularity: 154,
            codepoint: 58328,
            unsupported_families: [],
            categories: ['image'],
            tags: ['8', 'digit', 'edit', 'editing', 'effect', 'filter', 'image', 'images', 'multiple', 'number', 'photography', 'picture', 'pictures', 'settings', 'stack', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'filter_9',
            version: 10,
            popularity: 164,
            codepoint: 58329,
            unsupported_families: [],
            categories: ['image'],
            tags: ['9', 'digit', 'edit', 'editing', 'effect', 'filter', 'image', 'images', 'multiple', 'number', 'photography', 'picture', 'pictures', 'settings', 'stack', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'filter_9_plus',
            version: 11,
            popularity: 193,
            codepoint: 58330,
            unsupported_families: [],
            categories: ['image'],
            tags: ['+', '9', 'digit', 'edit', 'editing', 'effect', 'filter', 'image', 'images', 'multiple', 'number', 'photography', 'picture', 'pictures', 'plus', 'settings', 'stack', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'filter_alt',
            version: 9,
            popularity: 15626,
            codepoint: 61263,
            unsupported_families: [],
            categories: ['action'],
            tags: ['alt', 'edit', 'filter', 'funnel', 'options', 'refine', 'sift'],
            sizes_px: [24]
        }, {
            name: 'filter_b_and_w',
            version: 11,
            popularity: 230,
            codepoint: 58331,
            unsupported_families: [],
            categories: ['image'],
            tags: ['and', 'b', 'black', 'contrast', 'edit', 'editing', 'effect', 'filter', 'grayscale', 'image', 'images', 'photography', 'picture', 'pictures', 'settings', 'w', 'white'],
            sizes_px: [24]
        }, {
            name: 'filter_center_focus',
            version: 10,
            popularity: 620,
            codepoint: 58332,
            unsupported_families: [],
            categories: ['image'],
            tags: ['camera', 'center', 'dot', 'edit', 'filter', 'focus', 'image', 'photo', 'photography', 'picture'],
            sizes_px: [24]
        }, {
            name: 'filter_drama',
            version: 10,
            popularity: 904,
            codepoint: 58333,
            unsupported_families: [],
            categories: ['image'],
            tags: ['cloud', 'drama', 'edit', 'editing', 'effect', 'filter', 'image', 'photo', 'photography', 'picture', 'sky camera'],
            sizes_px: [24]
        }, {
            name: 'filter_frames',
            version: 11,
            popularity: 251,
            codepoint: 58334,
            unsupported_families: [],
            categories: ['image'],
            tags: ['boarders', 'border', 'camera', 'center', 'edit', 'editing', 'effect', 'filter', 'filters', 'focus', 'frame', 'frames', 'image', 'options', 'photo', 'photography', 'picture'],
            sizes_px: [24]
        }, {
            name: 'filter_hdr',
            version: 11,
            popularity: 278,
            codepoint: 58335,
            unsupported_families: [],
            categories: ['image'],
            tags: ['camera', 'edit', 'editing', 'effect', 'filter', 'hdr', 'image', 'mountain', 'mountains', 'photo', 'photography', 'picture'],
            sizes_px: [24]
        }, {
            name: 'filter_list',
            version: 10,
            popularity: 7866,
            codepoint: 57682,
            unsupported_families: [],
            categories: ['content'],
            tags: ['filter', 'lines', 'list', 'organize', 'sort'],
            sizes_px: [24]
        }, {
            name: 'filter_none',
            version: 11,
            popularity: 661,
            codepoint: 58336,
            unsupported_families: [],
            categories: ['image'],
            tags: ['filter', 'multiple', 'none', 'stack'],
            sizes_px: [24]
        }, {
            name: 'filter_tilt_shift',
            version: 12,
            popularity: 358,
            codepoint: 58338,
            unsupported_families: [],
            categories: ['image'],
            tags: ['blur', 'center', 'edit', 'editing', 'effect', 'filter', 'focus', 'image', 'images', 'photography', 'picture', 'pictures', 'shift', 'tilt'],
            sizes_px: [24]
        }, {
            name: 'filter_vintage',
            version: 11,
            popularity: 1049,
            codepoint: 58339,
            unsupported_families: [],
            categories: ['image'],
            tags: ['edit', 'editing', 'effect', 'filter', 'flower', 'image', 'images', 'photography', 'picture', 'pictures', 'vintage'],
            sizes_px: [24]
        }, {
            name: 'find_in_page',
            version: 10,
            popularity: 2350,
            codepoint: 59520,
            unsupported_families: [],
            categories: ['action'],
            tags: ['data', 'doc', 'document', 'drive', 'file', 'find', 'folder', 'folders', 'glass', 'in', 'look', 'magnify', 'magnifying', 'page', 'paper', 'search', 'see', 'sheet', 'slide', 'writing'],
            sizes_px: [24]
        }, {
            name: 'find_replace',
            version: 10,
            popularity: 732,
            codepoint: 59521,
            unsupported_families: [],
            categories: ['action'],
            tags: ['around', 'arrows', 'find', 'glass', 'inprogress', 'load', 'loading refresh', 'look', 'magnify', 'magnifying', 'renew', 'replace', 'rotate', 'search', 'see'],
            sizes_px: [24]
        }, {
            name: 'fingerprint',
            version: 10,
            popularity: 30124,
            codepoint: 59661,
            unsupported_families: [],
            categories: ['action'],
            tags: ['finger', 'fingerprint', 'id', 'identification', 'identity', 'print', 'reader', 'thumbprint', 'verification'],
            sizes_px: [24]
        }, {
            name: 'fire_extinguisher',
            version: 5,
            popularity: 400,
            codepoint: 61912,
            unsupported_families: [],
            categories: ['places'],
            tags: ['emergency', 'extinguisher', 'fire', 'water'],
            sizes_px: [24]
        }, {
            name: 'fireplace',
            version: 9,
            popularity: 691,
            codepoint: 59971,
            unsupported_families: [],
            categories: ['social'],
            tags: ['chimney', 'fire', 'fireplace', 'flame', 'home', 'house', 'living', 'pit', 'place', 'room', 'warm', 'winter'],
            sizes_px: [20, 24]
        }, {
            name: 'first_page',
            version: 9,
            popularity: 1933,
            codepoint: 58844,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['arrow', 'back', 'chevron', 'first', 'left', 'page', 'rewind'],
            sizes_px: [24]
        }, {
            name: 'fit_screen',
            version: 13,
            popularity: 1082,
            codepoint: 59920,
            unsupported_families: [],
            categories: ['action'],
            tags: ['enlarge', 'fit', 'format', 'layout', 'reduce', 'scale', 'screen', 'size'],
            sizes_px: [24]
        }, {
            name: 'fitness_center',
            version: 10,
            popularity: 2980,
            codepoint: 60227,
            unsupported_families: [],
            categories: ['places'],
            tags: ['athlete', 'center', 'dumbbell', 'exercise', 'fitness', 'gym', 'hobby', 'places', 'sport', 'weights', 'workout'],
            sizes_px: [24]
        }, {
            name: 'flag',
            version: 13,
            popularity: 4311,
            codepoint: 57683,
            unsupported_families: [],
            categories: ['content'],
            tags: ['country', 'flag', 'goal', 'mark', 'nation', 'report', 'start'],
            sizes_px: [24]
        }, {
            name: 'flaky',
            version: 11,
            popularity: 1182,
            codepoint: 61264,
            unsupported_families: [],
            categories: ['action'],
            tags: ['approve', 'check', 'close', 'complete', 'contrast', 'done', 'exit', 'flaky', 'mark', 'no', 'ok', 'options', 'select', 'stop', 'tick', 'verified', 'x', 'yes'],
            sizes_px: [20, 24]
        }, {
            name: 'flare',
            version: 10,
            popularity: 740,
            codepoint: 58340,
            unsupported_families: [],
            categories: ['image'],
            tags: ['bright', 'edit', 'editing', 'effect', 'flare', 'image', 'images', 'light', 'photography', 'picture', 'pictures', 'sparkle', 'sun'],
            sizes_px: [24]
        }, {
            name: 'flash_auto',
            version: 10,
            popularity: 307,
            codepoint: 58341,
            unsupported_families: [],
            categories: ['image'],
            tags: ['a', 'auto', 'bolt', 'camera', 'electric', 'fast', 'flash', 'lightning', 'thunderbolt'],
            sizes_px: [24]
        }, {
            name: 'flash_off',
            version: 10,
            popularity: 634,
            codepoint: 58342,
            unsupported_families: [],
            categories: ['image'],
            tags: ['bolt', 'camera', 'disabled', 'electric', 'enabled', 'fast', 'flash', 'lightning', 'off', 'on', 'slash', 'thunderbolt'],
            sizes_px: [24]
        }, {
            name: 'flash_on',
            version: 10,
            popularity: 2084,
            codepoint: 58343,
            unsupported_families: [],
            categories: ['image'],
            tags: ['bolt', 'camera', 'disabled', 'electric', 'enabled', 'fast', 'flash', 'lightning', 'off', 'on', 'slash', 'thunderbolt'],
            sizes_px: [24]
        }, {
            name: 'flashlight_off',
            version: 8,
            popularity: 222,
            codepoint: 61450,
            unsupported_families: [],
            categories: ['device'],
            tags: ['disabled', 'enabled', 'flash', 'flashlight', 'light', 'off', 'on', 'slash'],
            sizes_px: [24]
        }, {
            name: 'flashlight_on',
            version: 8,
            popularity: 577,
            codepoint: 61451,
            unsupported_families: [],
            categories: ['device'],
            tags: ['disabled', 'enabled', 'flash', 'flashlight', 'light', 'off', 'on', 'slash'],
            sizes_px: [24]
        }, {
            name: 'flatware',
            version: 7,
            popularity: 626,
            codepoint: 61452,
            unsupported_families: [],
            categories: ['search'],
            tags: ['cafe', 'cafeteria', 'cutlery', 'diner', 'dining', 'eat', 'eating', 'fork', 'room', 'spoon'],
            sizes_px: [24]
        }, {
            name: 'flight',
            version: 13,
            popularity: 2978,
            codepoint: 58681,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['air', 'airplane', 'airport', 'flight', 'plane', 'transportation', 'travel', 'trip'],
            sizes_px: [24]
        }, {
            name: 'flight_land',
            version: 11,
            popularity: 1157,
            codepoint: 59652,
            unsupported_families: [],
            categories: ['action'],
            tags: ['airport', 'arrival', 'arriving', 'flight', 'fly', 'land', 'landing', 'plane', 'transportation', 'travel'],
            sizes_px: [24]
        }, {
            name: 'flight_takeoff',
            version: 11,
            popularity: 4114,
            codepoint: 59653,
            unsupported_families: [],
            categories: ['action'],
            tags: ['airport', 'departed', 'departing', 'flight', 'fly', 'landing', 'plane', 'takeoff', 'transportation', 'travel'],
            sizes_px: [24]
        }, {
            name: 'flip',
            version: 10,
            popularity: 534,
            codepoint: 58344,
            unsupported_families: [],
            categories: ['image'],
            tags: ['edit', 'editing', 'flip', 'image', 'orientation', 'scan scanning'],
            sizes_px: [24]
        }, {
            name: 'flip_camera_android',
            version: 10,
            popularity: 621,
            codepoint: 59959,
            unsupported_families: [],
            categories: ['image'],
            tags: ['android', 'camera', 'center', 'edit', 'editing', 'flip', 'image', 'mobile', 'orientation', 'rotate', 'turn'],
            sizes_px: [20, 24]
        }, {
            name: 'flip_camera_ios',
            version: 10,
            popularity: 491,
            codepoint: 59960,
            unsupported_families: [],
            categories: ['image'],
            tags: ['android', 'camera', 'edit', 'editing', 'flip', 'image', 'ios', 'mobile', 'orientation', 'rotate', 'turn'],
            sizes_px: [20, 24]
        }, {
            name: 'flip_to_back',
            version: 10,
            popularity: 381,
            codepoint: 59522,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrange', 'arrangement', 'back', 'flip', 'format', 'front', 'layout', 'move', 'order', 'sort', 'to'],
            sizes_px: [24]
        }, {
            name: 'flip_to_front',
            version: 10,
            popularity: 569,
            codepoint: 59523,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrange', 'arrangement', 'back', 'flip', 'format', 'front', 'layout', 'move', 'order', 'sort', 'to'],
            sizes_px: [24]
        }, {
            name: 'flourescent',
            version: 8,
            popularity: 271,
            codepoint: 61453,
            unsupported_families: [],
            categories: ['device'],
            tags: ['bright', 'flourescent', 'lamp', 'light', 'lightbulb'],
            sizes_px: [24]
        }, {
            name: 'flutter_dash',
            version: 3,
            popularity: 6987,
            codepoint: 57355,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bird', 'dash', 'flutter'],
            sizes_px: [20, 24]
        }, {
            name: 'fmd_bad',
            version: 13,
            popularity: 580,
            codepoint: 61454,
            unsupported_families: [],
            categories: ['device'],
            tags: ['!', 'alert', 'attention', 'bad', 'caution', 'danger', 'destination', 'direction', 'error', 'exclamation', 'fmd', 'important', 'location', 'maps', 'mark', 'notification', 'pin', 'place', 'symbol', 'warning'],
            sizes_px: [24]
        }, {
            name: 'fmd_good',
            version: 13,
            popularity: 1384,
            codepoint: 61455,
            unsupported_families: [],
            categories: ['device'],
            tags: ['destination', 'direction', 'fmd', 'good', 'location', 'maps', 'pin', 'place', 'stop'],
            sizes_px: [24]
        }, {
            name: 'folder',
            version: 11,
            popularity: 7374,
            codepoint: 58055,
            unsupported_families: [],
            categories: ['file'],
            tags: ['data', 'doc', 'document', 'drive', 'file', 'folder', 'folders', 'sheet', 'slide', 'storage'],
            sizes_px: [24]
        }, {
            name: 'folder_open',
            version: 11,
            popularity: 3610,
            codepoint: 58056,
            unsupported_families: [],
            categories: ['file'],
            tags: ['data', 'doc', 'document', 'drive', 'file', 'folder', 'folders', 'open', 'sheet', 'slide', 'storage'],
            sizes_px: [24]
        }, {
            name: 'folder_shared',
            version: 11,
            popularity: 1360,
            codepoint: 58057,
            unsupported_families: [],
            categories: ['file'],
            tags: ['account', 'collaboration', 'data', 'doc', 'document', 'drive', 'face', 'file', 'folder', 'human', 'people', 'person', 'profile', 'share', 'shared', 'sheet', 'slide', 'storage', 'team', 'user'],
            sizes_px: [24]
        }, {
            name: 'folder_special',
            version: 9,
            popularity: 740,
            codepoint: 58903,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['bookmark', 'data', 'doc', 'document', 'drive', 'favorite', 'file', 'folder', 'highlight', 'important', 'marked', 'save', 'saved', 'shape', 'sheet', 'slide', 'special', 'star', 'storage'],
            sizes_px: [24]
        }, {
            name: 'follow_the_signs',
            version: 5,
            popularity: 675,
            codepoint: 61986,
            unsupported_families: [],
            categories: ['social'],
            tags: ['arrow', 'body', 'directional', 'follow', 'human', 'people', 'person', 'right', 'signs', 'social', 'the'],
            sizes_px: [24]
        }, {
            name: 'font_download',
            version: 9,
            popularity: 736,
            codepoint: 57703,
            unsupported_families: [],
            categories: ['content'],
            tags: ['A', 'alphabet', 'character', 'download', 'font', 'letter', 'square', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'font_download_off',
            version: 2,
            popularity: 260,
            codepoint: 58617,
            unsupported_families: [],
            categories: ['content'],
            tags: ['alphabet', 'character', 'disabled', 'download', 'enabled', 'font', 'letter', 'off', 'on', 'slash', 'square', 'symbol', 'text', 'type'],
            sizes_px: [20, 24]
        }, {
            name: 'food_bank',
            version: 5,
            popularity: 643,
            codepoint: 61938,
            unsupported_families: [],
            categories: ['places'],
            tags: ['architecture', 'bank', 'building', 'charity', 'eat', 'estate', 'food', 'fork', 'house', 'knife', 'meal', 'place', 'real', 'residence', 'residential', 'shelter', 'utensils'],
            sizes_px: [24]
        }, {
            name: 'format_align_center',
            version: 10,
            popularity: 701,
            codepoint: 57908,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['align', 'alignment', 'center', 'doc', 'edit', 'editing', 'editor', 'format', 'sheet', 'spreadsheet', 'text', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'format_align_justify',
            version: 10,
            popularity: 569,
            codepoint: 57909,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['align', 'alignment', 'doc', 'edit', 'editing', 'editor', 'format', 'justify', 'sheet', 'spreadsheet', 'text', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'format_align_left',
            version: 11,
            popularity: 1062,
            codepoint: 57910,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['align', 'alignment', 'doc', 'edit', 'editing', 'editor', 'format', 'left', 'sheet', 'spreadsheet', 'text', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'format_align_right',
            version: 11,
            popularity: 615,
            codepoint: 57911,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['align', 'alignment', 'doc', 'edit', 'editing', 'editor', 'format', 'right', 'sheet', 'spreadsheet', 'text', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'format_bold',
            version: 10,
            popularity: 1469,
            codepoint: 57912,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['B', 'alphabet', 'bold', 'character', 'doc', 'edit', 'editing', 'editor', 'font', 'format', 'letter', 'sheet', 'spreadsheet', 'styles', 'symbol', 'text', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'format_clear',
            version: 10,
            popularity: 260,
            codepoint: 57913,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['T', 'alphabet', 'character', 'clear', 'disabled', 'doc', 'edit', 'editing', 'editor', 'enabled', 'font', 'format', 'letter', 'off', 'on', 'sheet', 'slash', 'spreadsheet', 'style', 'symbol', 'text', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'format_color_fill',
            version: 12,
            popularity: 1076,
            codepoint: 57914,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['bucket', 'color', 'doc', 'edit', 'editing', 'editor', 'fill', 'format', 'paint', 'sheet', 'spreadsheet', 'style', 'text', 'type', 'writing'],
            sizes_px: [20, 24]
        }, {
            name: 'format_color_reset',
            version: 9,
            popularity: 359,
            codepoint: 57915,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['clear', 'color', 'disabled', 'doc', 'droplet', 'edit', 'editing', 'editor', 'enabled', 'fill', 'format', 'off', 'on', 'paint', 'reset', 'sheet', 'slash', 'spreadsheet', 'style', 'text', 'type', 'water', 'writing'],
            sizes_px: [24]
        }, {
            name: 'format_color_text',
            version: 14,
            popularity: 652,
            codepoint: 57916,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['color', 'doc', 'edit', 'editing', 'editor', 'fill', 'format', 'paint', 'sheet', 'spreadsheet', 'style', 'text', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'format_indent_decrease',
            version: 11,
            popularity: 260,
            codepoint: 57917,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['align', 'alignment', 'decrease', 'doc', 'edit', 'editing', 'editor', 'format', 'indent', 'indentation', 'paragraph', 'sheet', 'spreadsheet', 'text', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'format_indent_increase',
            version: 11,
            popularity: 358,
            codepoint: 57918,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['align', 'alignment', 'doc', 'edit', 'editing', 'editor', 'format', 'increase', 'indent', 'indentation', 'paragraph', 'sheet', 'spreadsheet', 'text', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'format_italic',
            version: 10,
            popularity: 1048,
            codepoint: 57919,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['alphabet', 'character', 'doc', 'edit', 'editing', 'editor', 'font', 'format', 'italic', 'letter', 'sheet', 'spreadsheet', 'style', 'symbol', 'text', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'format_line_spacing',
            version: 10,
            popularity: 277,
            codepoint: 57920,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['align', 'alignment', 'doc', 'edit', 'editing', 'editor', 'format', 'line', 'sheet', 'spacing', 'spreadsheet', 'text', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'format_list_bulleted',
            version: 11,
            popularity: 5679,
            codepoint: 57921,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['align', 'alignment', 'bulleted', 'doc', 'edit', 'editing', 'editor', 'format', 'list', 'notes', 'sheet', 'spreadsheet', 'text', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'format_list_numbered',
            version: 10,
            popularity: 2135,
            codepoint: 57922,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['align', 'alignment', 'digit', 'doc', 'edit', 'editing', 'editor', 'format', 'list', 'notes', 'number', 'numbered', 'sheet', 'spreadsheet', 'symbol', 'text', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'format_list_numbered_rtl',
            version: 10,
            popularity: 635,
            codepoint: 57959,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['align', 'alignment', 'digit', 'doc', 'edit', 'editing', 'editor', 'format', 'list', 'notes', 'number', 'numbered', 'rtl', 'sheet', 'spreadsheet', 'symbol', 'text', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'format_paint',
            version: 10,
            popularity: 719,
            codepoint: 57923,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['brush', 'color', 'doc', 'edit', 'editing', 'editor', 'fill', 'format', 'paint', 'roller', 'sheet', 'spreadsheet', 'style', 'text', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'format_quote',
            version: 10,
            popularity: 2666,
            codepoint: 57924,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['doc', 'edit', 'editing', 'editor', 'format', 'quotation', 'quote', 'sheet', 'spreadsheet', 'text', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'format_shapes',
            version: 10,
            popularity: 532,
            codepoint: 57950,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['alphabet', 'character', 'color', 'doc', 'edit', 'editing', 'editor', 'fill', 'font', 'format', 'letter', 'paint', 'shapes', 'sheet', 'spreadsheet', 'style', 'symbol', 'text', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'format_size',
            version: 10,
            popularity: 990,
            codepoint: 57925,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['alphabet', 'character', 'color', 'doc', 'edit', 'editing', 'editor', 'fill', 'font', 'format', 'letter', 'paint', 'sheet', 'size', 'spreadsheet', 'style', 'symbol', 'text', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'format_strikethrough',
            version: 10,
            popularity: 259,
            codepoint: 57926,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['alphabet', 'character', 'doc', 'edit', 'editing', 'editor', 'font', 'format', 'letter', 'sheet', 'spreadsheet', 'strikethrough', 'style', 'symbol', 'text', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'format_textdirection_l_to_r',
            version: 11,
            popularity: 108,
            codepoint: 57927,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['align', 'alignment', 'doc', 'edit', 'editing', 'editor', 'format', 'ltr', 'sheet', 'spreadsheet', 'text', 'textdirection', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'format_textdirection_r_to_l',
            version: 11,
            popularity: 115,
            codepoint: 57928,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['align', 'alignment', 'doc', 'edit', 'editing', 'editor', 'format', 'rtl', 'sheet', 'spreadsheet', 'text', 'textdirection', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'format_underlined',
            version: 11,
            popularity: 806,
            codepoint: 57929,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['alphabet', 'character', 'doc', 'edit', 'editing', 'editor', 'font', 'format', 'letter', 'line', 'sheet', 'spreadsheet', 'style', 'symbol', 'text', 'type', 'under', 'underlined', 'writing'],
            sizes_px: [24]
        }, {
            name: 'forum',
            version: 14,
            popularity: 3513,
            codepoint: 57535,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['bubble', 'chat', 'comment', 'communicate', 'community', 'conversation', 'feedback', 'forum', 'hub', 'message', 'speech'],
            sizes_px: [24]
        }, {
            name: 'forward',
            version: 12,
            popularity: 1794,
            codepoint: 57684,
            unsupported_families: [],
            categories: ['content'],
            tags: ['arrow', 'forward', 'mail', 'message', 'playback', 'right', 'sent'],
            sizes_px: [24]
        }, {
            name: 'forward_10',
            version: 11,
            popularity: 779,
            codepoint: 57430,
            unsupported_families: [],
            categories: ['av'],
            tags: ['10', 'arrow', 'control', 'controls', 'digit', 'fast', 'forward', 'music', 'number', 'play', 'seconds', 'symbol', 'video'],
            sizes_px: [24]
        }, {
            name: 'forward_30',
            version: 11,
            popularity: 338,
            codepoint: 57431,
            unsupported_families: [],
            categories: ['av'],
            tags: ['30', 'arrow', 'control', 'controls', 'digit', 'fast', 'forward', 'music', 'number', 'seconds', 'symbol', 'video'],
            sizes_px: [24]
        }, {
            name: 'forward_5',
            version: 11,
            popularity: 296,
            codepoint: 57432,
            unsupported_families: [],
            categories: ['av'],
            tags: ['10', '5', 'arrow', 'control', 'controls', 'digit', 'fast', 'forward', 'music', 'number', 'seconds', 'symbol', 'video'],
            sizes_px: [24]
        }, {
            name: 'forward_to_inbox',
            version: 7,
            popularity: 1825,
            codepoint: 61831,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['arrow', 'email', 'envelop', 'forward', 'inbox', 'letter', 'mail', 'message', 'send', 'to'],
            sizes_px: [20, 24]
        }, {
            name: 'foundation',
            version: 4,
            popularity: 670,
            codepoint: 61952,
            unsupported_families: [],
            categories: ['places'],
            tags: ['architecture', 'base', 'basis', 'building', 'construction', 'estate', 'foundation', 'home', 'house', 'real', 'residential'],
            sizes_px: [24]
        }, {
            name: 'free_breakfast',
            version: 9,
            popularity: 748,
            codepoint: 60228,
            unsupported_families: [],
            categories: ['places'],
            tags: ['beverage', 'breakfast', 'cafe', 'coffee', 'cup', 'drink', 'free', 'mug', 'tea'],
            sizes_px: [24]
        }, {
            name: 'free_cancellation',
            version: 3,
            popularity: 451,
            codepoint: 59208,
            unsupported_families: [],
            categories: ['action'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'front_hand',
            version: 1,
            popularity: 1013,
            codepoint: 59241,
            unsupported_families: [],
            categories: ['social'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'fullscreen',
            version: 10,
            popularity: 4008,
            codepoint: 58832,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['adjust', 'app', 'application', 'components', 'full', 'fullscreen', 'interface', 'screen', 'site', 'size', 'ui', 'ux', 'view', 'web', 'website'],
            sizes_px: [24]
        }, {
            name: 'fullscreen_exit',
            version: 10,
            popularity: 1888,
            codepoint: 58833,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['adjust', 'app', 'application', 'components', 'exit', 'full', 'fullscreen', 'interface', 'screen', 'site', 'size', 'ui', 'ux', 'view', 'web', 'website'],
            sizes_px: [24]
        }, {
            name: 'functions',
            version: 10,
            popularity: 1132,
            codepoint: 57930,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['average', 'calculate', 'count', 'doc', 'edit', 'editing', 'editor', 'functions', 'math', 'sheet', 'spreadsheet', 'style', 'sum', 'text', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'g_mobiledata',
            version: 7,
            popularity: 131,
            codepoint: 61456,
            unsupported_families: [],
            categories: ['device'],
            tags: ['alphabet', 'character', 'data', 'font', 'g', 'letter', 'mobile', 'network', 'service', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'g_translate',
            version: 9,
            popularity: 2085,
            codepoint: 59687,
            unsupported_families: [],
            categories: ['action'],
            tags: ['emblem', 'g', 'google', 'language', 'logo', 'mark', 'speaking', 'speech', 'translate', 'translator', 'words'],
            sizes_px: [24]
        }, {
            name: 'gamepad',
            version: 10,
            popularity: 470,
            codepoint: 58127,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['buttons', 'console', 'controller', 'device', 'game', 'gamepad', 'gaming', 'playstation', 'video'],
            sizes_px: [24]
        }, {
            name: 'games',
            version: 10,
            popularity: 810,
            codepoint: 57377,
            unsupported_families: [],
            categories: ['av'],
            tags: ['adjust', 'arrow', 'arrows', 'control', 'controller', 'direction', 'games', 'gaming', 'left', 'move', 'right'],
            sizes_px: [24]
        }, {
            name: 'garage',
            version: 7,
            popularity: 761,
            codepoint: 61457,
            unsupported_families: [],
            categories: ['search'],
            tags: ['automobile', 'automotive', 'car', 'cars', 'direction', 'garage', 'maps', 'transportation', 'travel', 'vehicle'],
            sizes_px: [24]
        }, {
            name: 'gavel',
            version: 12,
            popularity: 3655,
            codepoint: 59662,
            unsupported_families: [],
            categories: ['action'],
            tags: ['agreement', 'contract', 'court', 'document', 'gavel', 'government', 'judge', 'law', 'mallet', 'official', 'police', 'rule', 'rules', 'terms'],
            sizes_px: [24]
        }, {
            name: 'generating_tokens',
            version: 3,
            popularity: 566,
            codepoint: 59209,
            unsupported_families: [],
            categories: ['action'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'gesture',
            version: 10,
            popularity: 691,
            codepoint: 57685,
            unsupported_families: [],
            categories: ['content'],
            tags: ['drawing', 'finger', 'gesture', 'gestures', 'hand', 'motion'],
            sizes_px: [24]
        }, {
            name: 'get_app',
            version: 10,
            popularity: 3581,
            codepoint: 59524,
            unsupported_families: [],
            categories: ['action'],
            tags: ['app', 'arrow', 'arrows', 'down', 'download', 'downloads', 'export', 'get', 'install', 'play', 'upload'],
            sizes_px: [24]
        }, {
            name: 'gif',
            version: 12,
            popularity: 897,
            codepoint: 59656,
            unsupported_families: [],
            categories: ['action'],
            tags: ['alphabet', 'animated', 'animation', 'bitmap', 'character', 'font', 'format', 'gif', 'graphics', 'interchange', 'letter', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'gite',
            version: 2,
            popularity: 750,
            codepoint: 58763,
            unsupported_families: [],
            categories: ['places'],
            tags: ['architecture', 'estate', 'gite', 'home', 'hostel', 'house', 'maps', 'place', 'real', 'residence', 'residential', 'stay', 'traveling'],
            sizes_px: [20, 24]
        }, {
            name: 'golf_course',
            version: 9,
            popularity: 547,
            codepoint: 60229,
            unsupported_families: [],
            categories: ['places'],
            tags: ['athlete', 'athletic', 'ball', 'club', 'course', 'entertainment', 'flag', 'golf', 'golfer', 'golfing', 'hobby', 'hole', 'places', 'putt', 'sports'],
            sizes_px: [24]
        }, {
            name: 'gpp_bad',
            version: 8,
            popularity: 692,
            codepoint: 61458,
            unsupported_families: [],
            categories: ['device'],
            tags: ['bad', 'cancel', 'certified', 'close', 'error', 'exit', 'gpp', 'no', 'privacy', 'private', 'protect', 'protection', 'remove', 'security', 'shield', 'sim', 'stop', 'verified', 'x'],
            sizes_px: [24]
        }, {
            name: 'gpp_good',
            version: 7,
            popularity: 1671,
            codepoint: 61459,
            unsupported_families: [],
            categories: ['device'],
            tags: ['certified', 'check', 'good', 'gpp', 'ok', 'pass', 'security', 'shield', 'sim', 'tick'],
            sizes_px: [24]
        }, {
            name: 'gpp_maybe',
            version: 8,
            popularity: 883,
            codepoint: 61460,
            unsupported_families: [],
            categories: ['device'],
            tags: ['!', 'alert', 'attention', 'caution', 'certified', 'danger', 'error', 'exclamation', 'gpp', 'important', 'mark', 'maybe', 'notification', 'privacy', 'private', 'protect', 'protection', 'security', 'shield', 'sim', 'symbol', 'verified', 'warning'],
            sizes_px: [24]
        }, {
            name: 'gps_fixed',
            version: 10,
            popularity: 2163,
            codepoint: 57779,
            unsupported_families: [],
            categories: ['device'],
            tags: ['destination', 'direction', 'fixed', 'gps', 'location', 'maps', 'pin', 'place', 'pointer', 'stop', 'tracking'],
            sizes_px: [24]
        }, {
            name: 'gps_not_fixed',
            version: 10,
            popularity: 473,
            codepoint: 57780,
            unsupported_families: [],
            categories: ['device'],
            tags: ['destination', 'direction', 'disabled', 'enabled', 'gps', 'location', 'maps', 'not fixed', 'off', 'on', 'online', 'place', 'pointer', 'slash', 'tracking'],
            sizes_px: [24]
        }, {
            name: 'gps_off',
            version: 10,
            popularity: 286,
            codepoint: 57781,
            unsupported_families: [],
            categories: ['device'],
            tags: ['destination', 'direction', 'disabled', 'enabled', 'gps', 'location', 'maps', 'not fixed', 'off', 'offline', 'on', 'place', 'pointer', 'slash', 'tracking'],
            sizes_px: [24]
        }, {
            name: 'grade',
            version: 11,
            popularity: 6830,
            codepoint: 59525,
            unsupported_families: [],
            categories: ['action'],
            tags: ['achievement', 'grade', 'important', 'marked', 'rate', 'reward', 'saved', 'shape', 'special', 'star'],
            sizes_px: [24]
        }, {
            name: 'gradient',
            version: 10,
            popularity: 377,
            codepoint: 58345,
            unsupported_families: [],
            categories: ['image'],
            tags: ['color', 'edit', 'editing', 'effect', 'filter', 'gradient', 'image', 'images', 'photography', 'picture', 'pictures'],
            sizes_px: [24]
        }, {
            name: 'grading',
            version: 10,
            popularity: 2676,
            codepoint: 59983,
            unsupported_families: [],
            categories: ['action'],
            tags: ['approve', 'check', 'complete', 'document', 'done', 'feedback', 'grade', 'grading', 'mark', 'ok', 'review', 'reviewed', 'select', 'tick', 'validate', 'verified', 'writing', 'yes'],
            sizes_px: [20, 24]
        }, {
            name: 'grain',
            version: 10,
            popularity: 618,
            codepoint: 58346,
            unsupported_families: [],
            categories: ['image'],
            tags: ['dots', 'edit', 'editing', 'effect', 'filter', 'grain', 'image', 'images', 'photography', 'picture', 'pictures'],
            sizes_px: [24]
        }, {
            name: 'graphic_eq',
            version: 11,
            popularity: 1394,
            codepoint: 57784,
            unsupported_families: [],
            categories: ['device'],
            tags: ['audio', 'eq', 'equalizer', 'graphic', 'music', 'recording', 'sound', 'voice'],
            sizes_px: [24]
        }, {
            name: 'grass',
            version: 5,
            popularity: 1297,
            codepoint: 61957,
            unsupported_families: [],
            categories: ['places'],
            tags: ['backyard', 'fodder', 'grass', 'ground', 'home', 'lawn', 'plant', 'turf', 'yard'],
            sizes_px: [24]
        }, {
            name: 'grid_3x3',
            version: 8,
            popularity: 235,
            codepoint: 61461,
            unsupported_families: [],
            categories: ['device'],
            tags: ['3', 'grid', 'layout', 'line', 'space'],
            sizes_px: [24]
        }, {
            name: 'grid_4x4',
            version: 8,
            popularity: 339,
            codepoint: 61462,
            unsupported_families: [],
            categories: ['device'],
            tags: ['4', 'by', 'grid', 'layout', 'lines', 'space'],
            sizes_px: [24]
        }, {
            name: 'grid_goldenratio',
            version: 8,
            popularity: 147,
            codepoint: 61463,
            unsupported_families: [],
            categories: ['device'],
            tags: ['golden', 'goldenratio', 'grid', 'layout', 'lines', 'ratio', 'space'],
            sizes_px: [24]
        }, {
            name: 'grid_off',
            version: 10,
            popularity: 183,
            codepoint: 58347,
            unsupported_families: [],
            categories: ['image'],
            tags: ['collage', 'disabled', 'enabled', 'grid', 'image', 'layout', 'off', 'on', 'slash', 'view'],
            sizes_px: [24]
        }, {
            name: 'grid_on',
            version: 10,
            popularity: 1130,
            codepoint: 58348,
            unsupported_families: [],
            categories: ['image'],
            tags: ['collage', 'disabled', 'enabled', 'grid', 'image', 'layout', 'off', 'on', 'slash', 'view'],
            sizes_px: [24]
        }, {
            name: 'grid_view',
            version: 10,
            popularity: 5905,
            codepoint: 59824,
            unsupported_families: [],
            categories: ['file'],
            tags: ['app', 'application square', 'blocks', 'components', 'dashboard', 'design', 'grid', 'interface', 'layout', 'screen', 'site', 'tiles', 'ui', 'ux', 'view', 'web', 'website', 'window'],
            sizes_px: [24]
        }, {
            name: 'group',
            version: 14,
            popularity: 7299,
            codepoint: 59375,
            unsupported_families: [],
            categories: ['social'],
            tags: ['accounts', 'committee', 'face', 'family', 'friends', 'group', 'humans', 'network', 'people', 'persons', 'profiles', 'social', 'team', 'users'],
            sizes_px: [24]
        }, {
            name: 'group_add',
            version: 11,
            popularity: 3650,
            codepoint: 59376,
            unsupported_families: [],
            categories: ['social'],
            tags: ['accounts', 'add', 'committee', 'face', 'family', 'friends', 'group', 'humans', 'increase', 'more', 'network', 'people', 'persons', 'plus', 'profiles', 'social', 'team', 'users'],
            sizes_px: [24]
        }, {
            name: 'group_off',
            version: 3,
            popularity: 381,
            codepoint: 59207,
            unsupported_families: [],
            categories: ['social'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'group_work',
            version: 10,
            popularity: 2879,
            codepoint: 59526,
            unsupported_families: [],
            categories: ['action'],
            tags: ['alliance', 'collaboration', 'group', 'partnership', 'team', 'teamwork', 'together', 'work'],
            sizes_px: [24]
        }, {
            name: 'groups',
            version: 4,
            popularity: 18060,
            codepoint: 62003,
            unsupported_families: [],
            categories: ['social'],
            tags: ['body', 'club', 'collaboration', 'crowd', 'gathering', 'groups', 'human', 'meeting', 'people', 'person', 'social', 'teams'],
            sizes_px: [24]
        }, {
            name: 'h_mobiledata',
            version: 7,
            popularity: 130,
            codepoint: 61464,
            unsupported_families: [],
            categories: ['device'],
            tags: ['alphabet', 'character', 'data', 'font', 'h', 'letter', 'mobile', 'network', 'service', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'h_plus_mobiledata',
            version: 7,
            popularity: 110,
            codepoint: 61465,
            unsupported_families: [],
            categories: ['device'],
            tags: ['+', 'alphabet', 'character', 'data', 'font', 'h', 'letter', 'mobile', 'network', 'plus', 'service', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'hail',
            version: 9,
            popularity: 757,
            codepoint: 59825,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['body', 'hail', 'human', 'people', 'person', 'pick', 'public', 'stop', 'taxi', 'transportation'],
            sizes_px: [24]
        }, {
            name: 'handyman',
            version: 10,
            popularity: 2847,
            codepoint: 61707,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['build', 'construction', 'fix', 'hammer', 'handyman', 'repair', 'screw', 'screwdriver', 'tools'],
            sizes_px: [20, 24]
        }, {
            name: 'hardware',
            version: 8,
            popularity: 531,
            codepoint: 59993,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['break', 'construction', 'hammer', 'hardware', 'nail', 'repair', 'tool'],
            sizes_px: [20, 24]
        }, {
            name: 'hd',
            version: 10,
            popularity: 364,
            codepoint: 57426,
            unsupported_families: [],
            categories: ['av'],
            tags: ['alphabet', 'character', 'definition', 'display', 'font', 'hd', 'high', 'letter', 'movie', 'movies', 'quality', 'resolution', 'screen', 'symbol', 'text', 'tv', 'type', 'video'],
            sizes_px: [24]
        }, {
            name: 'hdr_auto',
            version: 8,
            popularity: 354,
            codepoint: 61466,
            unsupported_families: [],
            categories: ['device'],
            tags: ['A', 'alphabet', 'auto', 'camera', 'character', 'circle', 'dynamic', 'font', 'hdr', 'high', 'letter', 'photo', 'range', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'hdr_auto_select',
            version: 8,
            popularity: 115,
            codepoint: 61467,
            unsupported_families: [],
            categories: ['device'],
            tags: ['+', 'A', 'alphabet', 'auto', 'camera', 'character', 'circle', 'dynamic', 'font', 'hdr', 'high', 'letter', 'photo', 'range', 'select', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'hdr_enhanced_select',
            version: 9,
            popularity: 106,
            codepoint: 61265,
            unsupported_families: [],
            categories: ['image'],
            tags: ['add', 'alphabet', 'character', 'dynamic', 'enhance', 'font', 'hdr', 'high', 'letter', 'plus', 'range', 'select', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'hdr_off',
            version: 9,
            popularity: 96,
            codepoint: 58349,
            unsupported_families: [],
            categories: ['image'],
            tags: ['alphabet', 'character', 'disabled', 'dynamic', 'enabled', 'enhance', 'font', 'hdr', 'high', 'letter', 'off', 'on', 'range', 'select', 'slash', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'hdr_off_select',
            version: 8,
            popularity: 106,
            codepoint: 61468,
            unsupported_families: [],
            categories: ['device'],
            tags: ['alphabet', 'camera', 'character', 'circle', 'disabled', 'dynamic', 'enabled', 'font', 'hdr', 'high', 'letter', 'off', 'on', 'photo', 'range', 'select', 'slash', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'hdr_on',
            version: 9,
            popularity: 159,
            codepoint: 58350,
            unsupported_families: [],
            categories: ['image'],
            tags: ['add', 'alphabet', 'character', 'dynamic', 'enhance', 'font', 'hdr', 'high', 'letter', 'on', 'plus', 'range', 'select', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'hdr_on_select',
            version: 8,
            popularity: 126,
            codepoint: 61469,
            unsupported_families: [],
            categories: ['device'],
            tags: ['+', 'alphabet', 'camera', 'character', 'circle', 'dynamic', 'font', 'hdr', 'high', 'letter', 'on', 'photo', 'range', 'select', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'hdr_plus',
            version: 8,
            popularity: 115,
            codepoint: 61470,
            unsupported_families: [],
            categories: ['image'],
            tags: ['+', 'add', 'alphabet', 'character', 'circle', 'dynamic', 'enhance', 'font', 'hdr', 'high', 'letter', 'plus', 'range', 'select', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'hdr_strong',
            version: 10,
            popularity: 301,
            codepoint: 58353,
            unsupported_families: [],
            categories: ['image'],
            tags: ['circles', 'dots', 'dynamic', 'enhance', 'hdr', 'high', 'range', 'strong'],
            sizes_px: [24]
        }, {
            name: 'hdr_weak',
            version: 10,
            popularity: 261,
            codepoint: 58354,
            unsupported_families: [],
            categories: ['image'],
            tags: ['circles', 'dots', 'dynamic', 'enhance', 'hdr', 'high', 'range', 'weak'],
            sizes_px: [24]
        }, {
            name: 'headphones',
            version: 7,
            popularity: 1895,
            codepoint: 61471,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['accessory', 'audio', 'device', 'ear', 'earphone', 'headphones', 'headset', 'listen', 'music', 'sound'],
            sizes_px: [24]
        }, {
            name: 'headphones_battery',
            version: 7,
            popularity: 210,
            codepoint: 61472,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['accessory', 'audio', 'battery', 'charging', 'device', 'ear', 'earphone', 'headphones', 'headset', 'listen', 'music', 'sound'],
            sizes_px: [24]
        }, {
            name: 'headset',
            version: 10,
            popularity: 932,
            codepoint: 58128,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['accessory', 'audio', 'device', 'ear', 'earbuds', 'earphone', 'headphones', 'headset', 'listen', 'music', 'sound'],
            sizes_px: [24]
        }, {
            name: 'headset_mic',
            version: 10,
            popularity: 1854,
            codepoint: 58129,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['accessory', 'audio', 'chat', 'device', 'ear', 'earphone', 'headphones', 'headset', 'listen', 'mic', 'music', 'sound', 'talk'],
            sizes_px: [24]
        }, {
            name: 'headset_off',
            version: 10,
            popularity: 315,
            codepoint: 58170,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['accessory', 'audio', 'chat', 'device', 'disabled', 'ear', 'earphone', 'enabled', 'headphones', 'headset', 'listen', 'mic', 'music', 'off', 'on', 'slash', 'sound', 'talk'],
            sizes_px: [24]
        }, {
            name: 'healing',
            version: 10,
            popularity: 912,
            codepoint: 58355,
            unsupported_families: [],
            categories: ['image'],
            tags: ['bandage', 'edit', 'editing', 'emergency', 'fix', 'healing', 'hospital', 'image', 'medicine'],
            sizes_px: [24]
        }, {
            name: 'health_and_safety',
            version: 5,
            popularity: 4128,
            codepoint: 57813,
            unsupported_families: [],
            categories: ['social'],
            tags: ['+', 'add', 'and', 'certified', 'health', 'plus', 'privacy', 'private', 'protect', 'protection', 'safety', 'security', 'shield', 'symbol', 'verified'],
            sizes_px: [24]
        }, {
            name: 'hearing',
            version: 10,
            popularity: 956,
            codepoint: 57379,
            unsupported_families: [],
            categories: ['av'],
            tags: ['accessibility', 'accessible', 'aid', 'ear', 'handicap', 'hearing', 'help', 'impaired', 'listen', 'sound', 'volume'],
            sizes_px: [24]
        }, {
            name: 'hearing_disabled',
            version: 12,
            popularity: 302,
            codepoint: 61700,
            unsupported_families: [],
            categories: ['av'],
            tags: ['accessibility', 'accessible', 'aid', 'disabled', 'ear', 'enabled', 'handicap', 'hearing', 'help', 'impaired', 'listen', 'off', 'on', 'slash', 'sound', 'volume'],
            sizes_px: [20, 24]
        }, {
            name: 'height',
            version: 9,
            popularity: 687,
            codepoint: 59926,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['arrow', 'color', 'doc', 'down', 'edit', 'editing', 'editor', 'fill', 'format', 'height', 'paint', 'sheet', 'spreadsheet', 'style', 'text', 'type', 'up', 'writing'],
            sizes_px: [20, 24]
        }, {
            name: 'help',
            version: 11,
            popularity: 12021,
            codepoint: 59527,
            unsupported_families: [],
            categories: ['action'],
            tags: ['?', 'assistance', 'circle', 'help', 'info', 'information', 'punctuation', 'question mark', 'shape', 'support', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'help_center',
            version: 7,
            popularity: 2955,
            codepoint: 61888,
            unsupported_families: [],
            categories: ['action'],
            tags: ['?', 'assistance', 'center', 'help', 'info', 'information', 'punctuation', 'question mark', 'support', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'help_outline',
            version: 10,
            popularity: 20933,
            codepoint: 59645,
            unsupported_families: [],
            categories: ['action'],
            tags: ['?', 'assistance', 'circle', 'help', 'info', 'information', 'outline', 'punctuation', 'question mark', 'shape', 'support', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'hevc',
            version: 8,
            popularity: 97,
            codepoint: 61473,
            unsupported_families: [],
            categories: ['image'],
            tags: ['alphabet', 'character', 'coding', 'efficiency', 'font', 'hevc', 'high', 'letter', 'symbol', 'text', 'type', 'video'],
            sizes_px: [24]
        }, {
            name: 'hide_image',
            version: 8,
            popularity: 327,
            codepoint: 61474,
            unsupported_families: [],
            categories: ['image'],
            tags: ['disabled', 'enabled', 'hide', 'image', 'landscape', 'mountain', 'mountains', 'off', 'on', 'photo', 'photography', 'picture', 'slash'],
            sizes_px: [24]
        }, {
            name: 'hide_source',
            version: 7,
            popularity: 1138,
            codepoint: 61475,
            unsupported_families: [],
            categories: ['action'],
            tags: ['circle', 'disabled', 'enabled', 'hide', 'off', 'offline', 'on', 'shape', 'slash', 'source'],
            sizes_px: [24]
        }, {
            name: 'high_quality',
            version: 10,
            popularity: 394,
            codepoint: 57380,
            unsupported_families: [],
            categories: ['av'],
            tags: ['alphabet', 'character', 'definition', 'display', 'font', 'high', 'hq', 'letter', 'movie', 'movies', 'quality', 'resolution', 'screen', 'symbol', 'text', 'tv', 'type'],
            sizes_px: [24]
        }, {
            name: 'highlight',
            version: 12,
            popularity: 580,
            codepoint: 57951,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['color', 'doc', 'edit', 'editing', 'editor', 'emphasize', 'fill', 'flash', 'format', 'highlight', 'light', 'paint', 'sheet', 'spreadsheet', 'style', 'text', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'highlight_alt',
            version: 10,
            popularity: 1118,
            codepoint: 61266,
            unsupported_families: [],
            categories: ['action'],
            tags: ['alt', 'arrow', 'box', 'click', 'cursor', 'draw', 'focus', 'highlight', 'pointer', 'select', 'selection', 'target'],
            sizes_px: [24]
        }, {
            name: 'highlight_off',
            version: 12,
            popularity: 12041,
            codepoint: 59528,
            unsupported_families: [],
            categories: ['action'],
            tags: ['cancel', 'close', 'exit', 'highlight', 'no', 'off', 'quit', 'remove', 'stop', 'x'],
            sizes_px: [24]
        }, {
            name: 'hiking',
            version: 2,
            popularity: 1480,
            codepoint: 58634,
            unsupported_families: [],
            categories: ['social'],
            tags: ['backpacking', 'bag', 'climbing', 'duffle', 'hiking', 'mountain', 'social', 'sports', 'stick', 'trail', 'travel', 'walking'],
            sizes_px: [20, 24]
        }, {
            name: 'history',
            version: 10,
            popularity: 9550,
            codepoint: 59529,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrow', 'back', 'backwards', 'clock', 'date', 'history', 'refresh', 'renew', 'reverse', 'rotate', 'schedule', 'time', 'turn'],
            sizes_px: [24]
        }, {
            name: 'history_edu',
            version: 9,
            popularity: 2566,
            codepoint: 59966,
            unsupported_families: [],
            categories: ['social'],
            tags: ['document', 'edu', 'education', 'feather', 'history', 'letter', 'paper', 'pen', 'quill', 'school', 'story', 'tools', 'write', 'writing'],
            sizes_px: [20, 24]
        }, {
            name: 'history_toggle_off',
            version: 7,
            popularity: 1198,
            codepoint: 61821,
            unsupported_families: [],
            categories: ['action'],
            tags: ['clock', 'date', 'history', 'off', 'schedule', 'time', 'toggle'],
            sizes_px: [20, 24]
        }, {
            name: 'holiday_village',
            version: 2,
            popularity: 890,
            codepoint: 58762,
            unsupported_families: [],
            categories: ['places'],
            tags: ['architecture', 'beach', 'camping', 'cottage', 'estate', 'holiday', 'home', 'house', 'lake', 'lodge', 'maps', 'place', 'real', 'residence', 'residential', 'stay', 'traveling', 'vacation', 'village'],
            sizes_px: [20, 24]
        }, {
            name: 'home',
            version: 11,
            popularity: 79832,
            codepoint: 59530,
            unsupported_families: [],
            categories: ['action'],
            tags: ['address', 'app', 'application--house', 'architecture', 'building', 'components', 'design', 'estate', 'home', 'homepage', 'house', 'interface', 'layout', 'place', 'real', 'residence', 'residential', 'screen', 'shelter', 'site', 'structure', 'ui', 'unit', 'ux', 'web', 'website', 'window'],
            sizes_px: [24]
        }, {
            name: 'home_max',
            version: 8,
            popularity: 220,
            codepoint: 61476,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['device', 'gadget', 'hardware', 'home', 'internet', 'iot', 'max', 'nest', 'smart', 'things'],
            sizes_px: [24]
        }, {
            name: 'home_mini',
            version: 8,
            popularity: 201,
            codepoint: 61477,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['Internet', 'device', 'gadget', 'hardware', 'home', 'iot', 'mini', 'nest', 'smart', 'things'],
            sizes_px: [24]
        }, {
            name: 'home_repair_service',
            version: 10,
            popularity: 1562,
            codepoint: 61696,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['box', 'equipment', 'fix', 'home', 'kit', 'mechanic', 'repair', 'repairing', 'service', 'tool', 'toolbox', 'tools', 'workshop'],
            sizes_px: [20, 24]
        }, {
            name: 'home_work',
            version: 10,
            popularity: 2033,
            codepoint: 59913,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['architecture', 'building', 'estate', 'home', 'place', 'real', 'residence', 'residential', 'shelter', 'work'],
            sizes_px: [24]
        }, {
            name: 'horizontal_distribute',
            version: 4,
            popularity: 255,
            codepoint: 57364,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['alignment', 'distribute', 'format', 'horizontal', 'layout', 'lines', 'paragraph', 'rule', 'rules', 'style', 'text'],
            sizes_px: [24]
        }, {
            name: 'horizontal_rule',
            version: 11,
            popularity: 903,
            codepoint: 61704,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['gmail', 'horizontal', 'line', 'novitas', 'rule'],
            sizes_px: [20, 24]
        }, {
            name: 'horizontal_split',
            version: 10,
            popularity: 573,
            codepoint: 59719,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bars', 'format', 'horizontal', 'layout', 'lines', 'split', 'stacked'],
            sizes_px: [24]
        }, {
            name: 'hot_tub',
            version: 10,
            popularity: 392,
            codepoint: 60230,
            unsupported_families: [],
            categories: ['places'],
            tags: ['bath', 'bathing', 'bathroom', 'bathtub', 'hot', 'hotel', 'human', 'jacuzzi', 'person', 'shower', 'spa', 'steam', 'travel', 'tub', 'water'],
            sizes_px: [24]
        }, {
            name: 'hotel',
            version: 13,
            popularity: 1433,
            codepoint: 58682,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['body', 'hotel', 'human', 'people', 'person', 'sleep', 'stay', 'travel', 'trip'],
            sizes_px: [24]
        }, {
            name: 'hotel_class',
            version: 3,
            popularity: 831,
            codepoint: 59203,
            unsupported_families: [],
            categories: ['action'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'hourglass_bottom',
            version: 9,
            popularity: 1813,
            codepoint: 59996,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['bottom', 'countdown', 'half', 'hourglass', 'loading', 'minute', 'minutes', 'time', 'wait', 'waiting'],
            sizes_px: [20, 24]
        }, {
            name: 'hourglass_disabled',
            version: 10,
            popularity: 446,
            codepoint: 61267,
            unsupported_families: [],
            categories: ['action'],
            tags: ['clock', 'countdown', 'disabled', 'empty', 'enabled', 'hourglass', 'loading', 'minute', 'minutes', 'off', 'on', 'slash', 'time', 'wait', 'waiting'],
            sizes_px: [20, 24]
        }, {
            name: 'hourglass_empty',
            version: 10,
            popularity: 2894,
            codepoint: 59531,
            unsupported_families: [],
            categories: ['action'],
            tags: ['countdown', 'empty', 'hourglass', 'loading', 'minutes', 'time', 'wait', 'waiting'],
            sizes_px: [24]
        }, {
            name: 'hourglass_full',
            version: 10,
            popularity: 1040,
            codepoint: 59532,
            unsupported_families: [],
            categories: ['action'],
            tags: ['countdown', 'full', 'hourglass', 'loading', 'minutes', 'time', 'wait', 'waiting'],
            sizes_px: [24]
        }, {
            name: 'hourglass_top',
            version: 9,
            popularity: 1682,
            codepoint: 59995,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['countdown', 'half', 'hourglass', 'loading', 'minute', 'minutes', 'time', 'top', 'wait', 'waiting'],
            sizes_px: [20, 24]
        }, {
            name: 'house',
            version: 9,
            popularity: 2470,
            codepoint: 59972,
            unsupported_families: [],
            categories: ['places'],
            tags: ['architecture', 'building', 'estate', 'family', 'home', 'homepage', 'house', 'place', 'places', 'real', 'residence', 'residential', 'shelter'],
            sizes_px: [20, 24]
        }, {
            name: 'house_siding',
            version: 4,
            popularity: 427,
            codepoint: 61954,
            unsupported_families: [],
            categories: ['places'],
            tags: ['architecture', 'building', 'construction', 'estate', 'exterior', 'facade', 'home', 'house', 'real', 'residential', 'siding'],
            sizes_px: [24]
        }, {
            name: 'houseboat',
            version: 2,
            popularity: 287,
            codepoint: 58756,
            unsupported_families: [],
            categories: ['places'],
            tags: ['architecture', 'beach', 'boat', 'estate', 'floating', 'home', 'house', 'houseboat', 'maps', 'place', 'real', 'residence', 'residential', 'sea', 'stay', 'traveling', 'vacation'],
            sizes_px: [20, 24]
        }, {
            name: 'how_to_reg',
            version: 12,
            popularity: 3525,
            codepoint: 57716,
            unsupported_families: [],
            categories: ['content'],
            tags: ['approve', 'ballot', 'check', 'complete', 'done', 'election', 'how', 'mark', 'ok', 'poll', 'register', 'registration', 'select', 'tick', 'to reg', 'validate', 'verified', 'vote', 'yes'],
            sizes_px: [24]
        }, {
            name: 'how_to_vote',
            version: 13,
            popularity: 795,
            codepoint: 57717,
            unsupported_families: [],
            categories: ['content'],
            tags: ['ballot', 'election', 'how', 'poll', 'to', 'vote'],
            sizes_px: [24]
        }, {
            name: 'http',
            version: 9,
            popularity: 724,
            codepoint: 59650,
            unsupported_families: [],
            categories: ['action'],
            tags: ['alphabet', 'character', 'font', 'http', 'letter', 'symbol', 'text', 'transfer', 'type', 'url', 'website'],
            sizes_px: [24]
        }, {
            name: 'https',
            version: 11,
            popularity: 2132,
            codepoint: 59533,
            unsupported_families: [],
            categories: ['action'],
            tags: ['https', 'lock', 'locked', 'password', 'privacy', 'private', 'protection', 'safety', 'secure', 'security'],
            sizes_px: [24]
        }, {
            name: 'hvac',
            version: 10,
            popularity: 322,
            codepoint: 61710,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['air', 'conditioning', 'heating', 'hvac', 'ventilation'],
            sizes_px: [20, 24]
        }, {
            name: 'ice_skating',
            version: 2,
            popularity: 329,
            codepoint: 58635,
            unsupported_families: [],
            categories: ['social'],
            tags: ['athlete', 'athletic', 'entertainment', 'exercise', 'hobby', 'ice', 'shoe', 'skates', 'skating', 'social', 'sports', 'travel'],
            sizes_px: [20, 24]
        }, {
            name: 'icecream',
            version: 9,
            popularity: 654,
            codepoint: 60009,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['cream', 'dessert', 'food', 'ice', 'icecream', 'snack'],
            sizes_px: [20, 24]
        }, {
            name: 'image',
            version: 11,
            popularity: 9583,
            codepoint: 58356,
            unsupported_families: [],
            categories: ['image'],
            tags: ['frame', 'image', 'landscape', 'mountain', 'mountains', 'photo', 'photography', 'picture'],
            sizes_px: [24]
        }, {
            name: 'image_aspect_ratio',
            version: 10,
            popularity: 128,
            codepoint: 58357,
            unsupported_families: [],
            categories: ['image'],
            tags: ['aspect', 'image', 'photo', 'photography', 'picture', 'ratio', 'rectangle', 'square'],
            sizes_px: [24]
        }, {
            name: 'image_not_supported',
            version: 11,
            popularity: 476,
            codepoint: 61718,
            unsupported_families: [],
            categories: ['image'],
            tags: ['disabled', 'enabled', 'image', 'landscape', 'mountain', 'mountains', 'not', 'off', 'on', 'photo', 'photography', 'picture', 'slash', 'supported'],
            sizes_px: [20, 24]
        }, {
            name: 'image_search',
            version: 10,
            popularity: 945,
            codepoint: 58431,
            unsupported_families: [],
            categories: ['image'],
            tags: ['find', 'glass', 'image', 'landscape', 'look', 'magnify', 'magnifying', 'mountain', 'mountains', 'photo', 'photography', 'picture', 'search', 'see'],
            sizes_px: [24]
        }, {
            name: 'imagesearch_roller',
            version: 9,
            popularity: 269,
            codepoint: 59828,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['art', 'image', 'imagesearch', 'paint', 'roller', 'search'],
            sizes_px: [24]
        }, {
            name: 'import_contacts',
            version: 12,
            popularity: 2019,
            codepoint: 57568,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['address', 'book', 'contacts', 'import', 'info', 'information', 'open'],
            sizes_px: [24]
        }, {
            name: 'import_export',
            version: 10,
            popularity: 1925,
            codepoint: 57539,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['arrow', 'arrows', 'direction', 'down', 'explort', 'import', 'up'],
            sizes_px: [24]
        }, {
            name: 'important_devices',
            version: 9,
            popularity: 1478,
            codepoint: 59666,
            unsupported_families: [],
            categories: ['action'],
            tags: ['Android', 'OS', 'desktop', 'devices', 'hardware', 'iOS', 'important', 'mobile', 'monitor', 'phone', 'star', 'tablet', 'web'],
            sizes_px: [24]
        }, {
            name: 'inbox',
            version: 13,
            popularity: 1699,
            codepoint: 57686,
            unsupported_families: [],
            categories: ['content'],
            tags: ['archive', 'email', 'inbox', 'incoming', 'mail', 'message'],
            sizes_px: [24]
        }, {
            name: 'indeterminate_check_box',
            version: 13,
            popularity: 1586,
            codepoint: 59657,
            unsupported_families: [],
            categories: ['toggle'],
            tags: ['app', 'application', 'box', 'button', 'check', 'components', 'control', 'design', 'form', 'indeterminate', 'interface', 'screen', 'select', 'selected', 'selection', 'site', 'square', 'toggle', 'ui', 'undetermined', 'ux', 'web', 'website'],
            sizes_px: [24]
        }, {
            name: 'info',
            version: 15,
            popularity: 47750,
            codepoint: 59534,
            unsupported_families: [],
            categories: ['action'],
            tags: ['alert', 'announcment', 'assistance', 'details', 'help', 'i', 'info', 'information', 'service', 'support'],
            sizes_px: [24]
        }, {
            name: 'input',
            version: 11,
            popularity: 2334,
            codepoint: 59536,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrow', 'box', 'download', 'input', 'login', 'move', 'right'],
            sizes_px: [24]
        }, {
            name: 'insert_chart',
            version: 10,
            popularity: 1022,
            codepoint: 57931,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['analytics', 'bar', 'bars', 'chart', 'data', 'diagram', 'graph', 'infographic', 'insert', 'measure', 'metrics', 'statistics', 'tracking'],
            sizes_px: [24]
        }, {
            name: 'insert_chart_outlined',
            version: 10,
            popularity: 1412,
            codepoint: 57962,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['analytics', 'bar', 'bars', 'chart', 'data', 'diagram', 'graph', 'infographic', 'insert', 'measure', 'metrics', 'outlined', 'statistics', 'tracking'],
            sizes_px: [24]
        }, {
            name: 'insert_comment',
            version: 11,
            popularity: 911,
            codepoint: 57932,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['add', 'bubble', 'chat', 'comment', 'feedback', 'insert', 'message'],
            sizes_px: [24]
        }, {
            name: 'insert_drive_file',
            version: 12,
            popularity: 3062,
            codepoint: 57933,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['doc', 'drive', 'file', 'format', 'insert', 'sheet', 'slide'],
            sizes_px: [24]
        }, {
            name: 'insert_emoticon',
            version: 13,
            popularity: 1670,
            codepoint: 57934,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['account', 'emoji', 'emoticon', 'face', 'happy', 'human', 'insert', 'people', 'person', 'profile', 'sentiment', 'smile', 'user'],
            sizes_px: [24]
        }, {
            name: 'insert_invitation',
            version: 10,
            popularity: 1185,
            codepoint: 57935,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['calendar', 'date', 'day', 'event', 'insert', 'invitation', 'mark', 'month', 'range', 'remember', 'reminder', 'today', 'week'],
            sizes_px: [24]
        }, {
            name: 'insert_link',
            version: 10,
            popularity: 1176,
            codepoint: 57936,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['add', 'attach', 'clip', 'file', 'insert', 'link', 'mail', 'media'],
            sizes_px: [24]
        }, {
            name: 'insert_photo',
            version: 10,
            popularity: 2651,
            codepoint: 57937,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['image', 'insert', 'landscape', 'mountain', 'mountains', 'photo', 'photography', 'picture'],
            sizes_px: [24]
        }, {
            name: 'insights',
            version: 10,
            popularity: 5893,
            codepoint: 61586,
            unsupported_families: [],
            categories: ['content'],
            tags: ['analytics', 'bar', 'bars', 'chart', 'data', 'diagram', 'graph', 'infographic', 'insights', 'measure', 'metrics', 'stars', 'statistics', 'tracking'],
            sizes_px: [20, 24]
        }, {
            name: 'integration_instructions',
            version: 9,
            popularity: 1900,
            codepoint: 61268,
            unsupported_families: [],
            categories: ['action'],
            tags: ['brackets', 'clipboard', 'code', 'css', 'develop', 'developer', 'doc', 'document', 'engineer', 'engineering clipboard', 'html', 'instructions', 'integration', 'platform'],
            sizes_px: [24]
        }, {
            name: 'inventory',
            version: 11,
            popularity: 5072,
            codepoint: 57721,
            unsupported_families: [],
            categories: ['content'],
            tags: ['buy', 'check', 'clipboard', 'commerce', 'e-commerce', 'inventory', 'list', 'purchase', 'shop', 'store'],
            sizes_px: [24]
        }, {
            name: 'inventory_2',
            version: 7,
            popularity: 6615,
            codepoint: 57761,
            unsupported_families: [],
            categories: ['content'],
            tags: ['archive', 'box', 'file', 'inventory', 'organize', 'packages', 'product', 'stock', 'storage', 'supply'],
            sizes_px: [20, 24]
        }, {
            name: 'invert_colors',
            version: 11,
            popularity: 1694,
            codepoint: 59537,
            unsupported_families: [],
            categories: ['action'],
            tags: ['colors', 'drop', 'droplet', 'edit', 'editing', 'hue', 'invert', 'inverted', 'palette', 'tone', 'water'],
            sizes_px: [20, 24]
        }, {
            name: 'invert_colors_off',
            version: 10,
            popularity: 245,
            codepoint: 57540,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['colors', 'disabled', 'drop', 'droplet', 'enabled', 'hue', 'invert', 'inverted', 'off', 'offline', 'on', 'opacity', 'palette', 'slash', 'tone', 'water'],
            sizes_px: [20, 24]
        }, {
            name: 'ios_share',
            version: 11,
            popularity: 3152,
            codepoint: 59064,
            unsupported_families: [],
            categories: ['social'],
            tags: ['arrow', 'arrows', 'button', 'direction', 'internet', 'ios', 'link', 'send', 'share', 'sharing', 'social', 'up', 'web', 'website'],
            sizes_px: [24]
        }, {
            name: 'iron',
            version: 2,
            popularity: 271,
            codepoint: 58755,
            unsupported_families: [],
            categories: ['places'],
            tags: ['appliance', 'clothes', 'electric', 'iron', 'ironing', 'machine', 'object'],
            sizes_px: [20, 24]
        }, {
            name: 'iso',
            version: 9,
            popularity: 288,
            codepoint: 58358,
            unsupported_families: [],
            categories: ['image'],
            tags: ['add', 'edit', 'editing', 'effect', 'image', 'iso', 'minus', 'photography', 'picture', 'plus', 'sensor', 'shutter', 'speed', 'subtract'],
            sizes_px: [24]
        }, {
            name: 'kayaking',
            version: 2,
            popularity: 572,
            codepoint: 58636,
            unsupported_families: [],
            categories: ['social'],
            tags: ['athlete', 'athletic', 'body', 'canoe', 'entertainment', 'exercise', 'hobby', 'human', 'kayak', 'kayaking', 'lake', 'paddle', 'paddling', 'people', 'person', 'rafting', 'river', 'row', 'social', 'sports', 'summer', 'travel', 'water'],
            sizes_px: [20, 24]
        }, {
            name: 'keyboard',
            version: 11,
            popularity: 1874,
            codepoint: 58130,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['computer', 'device', 'hardware', 'input', 'keyboard', 'keypad', 'letter', 'office', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'keyboard_alt',
            version: 13,
            popularity: 470,
            codepoint: 61480,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['alt', 'computer', 'device', 'hardware', 'input', 'keyboard', 'keypad', 'letter', 'office', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'keyboard_arrow_down',
            version: 11,
            popularity: 7337,
            codepoint: 58131,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['arrow', 'arrows', 'down', 'keyboard'],
            sizes_px: [24]
        }, {
            name: 'keyboard_arrow_left',
            version: 12,
            popularity: 2068,
            codepoint: 58132,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['arrow', 'arrows', 'keyboard', 'left'],
            sizes_px: [24]
        }, {
            name: 'keyboard_arrow_right',
            version: 12,
            popularity: 3841,
            codepoint: 58133,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['arrow', 'arrows', 'keyboard', 'right'],
            sizes_px: [24]
        }, {
            name: 'keyboard_arrow_up',
            version: 11,
            popularity: 2234,
            codepoint: 58134,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['arrow', 'arrows', 'keyboard', 'up'],
            sizes_px: [24]
        }, {
            name: 'keyboard_backspace',
            version: 11,
            popularity: 2223,
            codepoint: 58135,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['arrow', 'back', 'backspace', 'keyboard', 'left'],
            sizes_px: [24]
        }, {
            name: 'keyboard_capslock',
            version: 11,
            popularity: 254,
            codepoint: 58136,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['arrow', 'capslock', 'keyboard', 'up'],
            sizes_px: [24]
        }, {
            name: 'keyboard_hide',
            version: 10,
            popularity: 328,
            codepoint: 58138,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['arrow', 'computer', 'device', 'down', 'hardware', 'hide', 'input', 'keyboard', 'keypad', 'text'],
            sizes_px: [24]
        }, {
            name: 'keyboard_return',
            version: 11,
            popularity: 1647,
            codepoint: 58139,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['arrow', 'back', 'keyboard', 'left', 'return'],
            sizes_px: [24]
        }, {
            name: 'keyboard_tab',
            version: 11,
            popularity: 583,
            codepoint: 58140,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['arrow', 'keyboard', 'next', 'right', 'tab'],
            sizes_px: [24]
        }, {
            name: 'keyboard_voice',
            version: 12,
            popularity: 1113,
            codepoint: 58141,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['keyboard', 'mic', 'microphone', 'noise', 'record', 'recorder', 'speaker', 'voice'],
            sizes_px: [24]
        }, {
            name: 'king_bed',
            version: 10,
            popularity: 912,
            codepoint: 59973,
            unsupported_families: [],
            categories: ['social'],
            tags: ['bed', 'bedroom', 'double', 'furniture', 'home', 'hotel', 'house', 'king', 'night', 'pillows', 'queen', 'rest', 'room', 'sleep'],
            sizes_px: [20, 24]
        }, {
            name: 'kitchen',
            version: 9,
            popularity: 1003,
            codepoint: 60231,
            unsupported_families: [],
            categories: ['places'],
            tags: ['appliance', 'cold', 'food', 'fridge', 'home', 'house', 'ice', 'kitchen', 'places', 'refrigerator', 'storage'],
            sizes_px: [24]
        }, {
            name: 'kitesurfing',
            version: 2,
            popularity: 380,
            codepoint: 58637,
            unsupported_families: [],
            categories: ['social'],
            tags: ['athlete', 'athletic', 'beach', 'body', 'entertainment', 'exercise', 'hobby', 'human', 'kitesurfing', 'people', 'person', 'social', 'sports', 'surf', 'travel', 'water'],
            sizes_px: [20, 24]
        }, {
            name: 'label',
            version: 12,
            popularity: 3319,
            codepoint: 59538,
            unsupported_families: [],
            categories: ['action'],
            tags: ['favorite', 'indent', 'label', 'library', 'mail', 'remember', 'save', 'stamp', 'sticker', 'tag'],
            sizes_px: [24]
        }, {
            name: 'label_important',
            version: 12,
            popularity: 1959,
            codepoint: 59703,
            unsupported_families: [],
            categories: ['action'],
            tags: ['favorite', 'important', 'indent', 'label', 'library', 'mail', 'remember', 'save', 'stamp', 'sticker', 'tag', 'wing'],
            sizes_px: [24]
        }, {
            name: 'label_off',
            version: 11,
            popularity: 362,
            codepoint: 59830,
            unsupported_families: [],
            categories: ['action'],
            tags: ['disabled', 'enabled', 'favorite', 'indent', 'label', 'library', 'mail', 'off', 'on', 'remember', 'save', 'slash', 'stamp', 'sticker', 'tag', 'wing'],
            sizes_px: [24]
        }, {
            name: 'landscape',
            version: 10,
            popularity: 1070,
            codepoint: 58359,
            unsupported_families: [],
            categories: ['image'],
            tags: ['image', 'landscape', 'mountain', 'mountains', 'nature', 'photo', 'photography', 'picture'],
            sizes_px: [24]
        }, {
            name: 'language',
            version: 10,
            popularity: 20656,
            codepoint: 59540,
            unsupported_families: [],
            categories: ['action'],
            tags: ['globe', 'internet', 'language', 'planet', 'website', 'world', 'www'],
            sizes_px: [24]
        }, {
            name: 'laptop',
            version: 11,
            popularity: 2011,
            codepoint: 58142,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['Android', 'OS', 'chrome', 'computer', 'connect', 'desktop', 'device', 'display', 'hardware', 'iOS', 'laptop', 'link', 'mac', 'monitor', 'smart', 'tv', 'web', 'windows'],
            sizes_px: [24]
        }, {
            name: 'laptop_chromebook',
            version: 10,
            popularity: 851,
            codepoint: 58143,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['Android', 'OS', 'chrome', 'chromebook', 'device', 'display', 'hardware', 'iOS', 'laptop', 'mac chromebook', 'monitor', 'screen', 'web', 'window'],
            sizes_px: [24]
        }, {
            name: 'laptop_mac',
            version: 10,
            popularity: 886,
            codepoint: 58144,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['Android', 'OS', 'chrome', 'device', 'display', 'hardware', 'iOS', 'laptop', 'mac', 'monitor', 'screen', 'web', 'window'],
            sizes_px: [24]
        }, {
            name: 'laptop_windows',
            version: 10,
            popularity: 374,
            codepoint: 58145,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['Android', 'OS', 'chrome', 'device', 'display', 'hardware', 'iOS', 'laptop', 'mac', 'monitor', 'screen', 'web', 'window', 'windows'],
            sizes_px: [24]
        }, {
            name: 'last_page',
            version: 11,
            popularity: 1636,
            codepoint: 58845,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['app', 'application', 'arrow', 'chevron', 'components', 'end', 'forward', 'interface', 'last', 'page', 'right', 'screen', 'site', 'ui', 'ux', 'web', 'website'],
            sizes_px: [24]
        }, {
            name: 'launch',
            version: 12,
            popularity: 5396,
            codepoint: 59541,
            unsupported_families: [],
            categories: ['action'],
            tags: ['app', 'application', 'arrow', 'box', 'components', 'interface', 'launch', 'new', 'open', 'screen', 'site', 'ui', 'ux', 'web', 'website', 'window'],
            sizes_px: [24]
        }, {
            name: 'layers',
            version: 10,
            popularity: 2215,
            codepoint: 58683,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['arrange', 'disabled', 'enabled', 'interaction', 'layers', 'maps', 'off', 'on', 'overlay', 'pages', 'slash', 'stack'],
            sizes_px: [24]
        }, {
            name: 'layers_clear',
            version: 10,
            popularity: 471,
            codepoint: 58684,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['arrange', 'clear', 'delete', 'disabled', 'enabled', 'interaction', 'layers', 'maps', 'off', 'on', 'overlay', 'pages', 'slash'],
            sizes_px: [24]
        }, {
            name: 'leaderboard',
            version: 4,
            popularity: 4541,
            codepoint: 61964,
            unsupported_families: [],
            categories: ['action'],
            tags: ['analytics', 'bar', 'bars', 'chart', 'data', 'diagram', 'graph', 'infographic', 'leaderboard', 'measure', 'metrics', 'statistics', 'tracking'],
            sizes_px: [24]
        }, {
            name: 'leak_add',
            version: 10,
            popularity: 418,
            codepoint: 58360,
            unsupported_families: [],
            categories: ['image'],
            tags: ['add', 'connection', 'data', 'leak', 'link', 'network', 'service', 'signals', 'synce', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'leak_remove',
            version: 10,
            popularity: 163,
            codepoint: 58361,
            unsupported_families: [],
            categories: ['image'],
            tags: ['connection', 'data', 'disabled', 'enabled', 'leak', 'link', 'network', 'off', 'offline', 'on', 'remove', 'service', 'signals', 'slash', 'synce', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'legend_toggle',
            version: 6,
            popularity: 770,
            codepoint: 61723,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['analytics', 'chart', 'data', 'diagram', 'graph', 'infographic', 'legend', 'measure', 'metrics', 'monitoring', 'stackdriver', 'statistics', 'toggle', 'tracking'],
            sizes_px: [20, 24]
        }, {
            name: 'lens',
            version: 10,
            popularity: 994,
            codepoint: 58362,
            unsupported_families: [],
            categories: ['image'],
            tags: ['circle', 'full', 'geometry', 'lens', 'moon'],
            sizes_px: [24]
        }, {
            name: 'lens_blur',
            version: 8,
            popularity: 640,
            codepoint: 61481,
            unsupported_families: [],
            categories: ['device'],
            tags: ['blur', 'camera', 'dim', 'dot', 'effect', 'foggy', 'fuzzy', 'image', 'lens', 'photo', 'soften'],
            sizes_px: [24]
        }, {
            name: 'library_add',
            version: 11,
            popularity: 1567,
            codepoint: 57390,
            unsupported_families: [],
            categories: ['av'],
            tags: ['+', 'add', 'collection', 'layers', 'library', 'multiple', 'music', 'new', 'plus', 'save', 'stacked', 'symbol', 'video'],
            sizes_px: [24]
        }, {
            name: 'library_add_check',
            version: 15,
            popularity: 819,
            codepoint: 59831,
            unsupported_families: [],
            categories: ['av'],
            tags: ['add', 'approve', 'check', 'collection', 'complete', 'done', 'layers', 'library', 'mark', 'multiple', 'music', 'ok', 'select', 'stacked', 'tick', 'validate', 'verified', 'video', 'yes'],
            sizes_px: [20, 24]
        }, {
            name: 'library_books',
            version: 12,
            popularity: 3458,
            codepoint: 57391,
            unsupported_families: [],
            categories: ['av'],
            tags: ['add', 'album', 'audio', 'book', 'books', 'collection', 'library', 'read', 'reading'],
            sizes_px: [24]
        }, {
            name: 'library_music',
            version: 11,
            popularity: 1283,
            codepoint: 57392,
            unsupported_families: [],
            categories: ['av'],
            tags: ['add', 'album', 'audio', 'collection', 'library', 'music', 'song', 'sounds'],
            sizes_px: [24]
        }, {
            name: 'light',
            version: 7,
            popularity: 805,
            codepoint: 61482,
            unsupported_families: [],
            categories: ['search'],
            tags: ['bulb', 'ceiling', 'hanging', 'inside', 'interior', 'lamp', 'light', 'lighting', 'pendent', 'room'],
            sizes_px: [24]
        }, {
            name: 'light_mode',
            version: 2,
            popularity: 5508,
            codepoint: 58648,
            unsupported_families: [],
            categories: ['device'],
            tags: ['bright', 'brightness', 'day', 'device', 'light', 'lighting', 'mode', 'mornng', 'sky', 'sun', 'sunny'],
            sizes_px: [20, 24]
        }, {
            name: 'lightbulb',
            version: 13,
            popularity: 14256,
            codepoint: 57584,
            unsupported_families: [],
            categories: ['action'],
            tags: ['alert', 'announcement', 'idea', 'info', 'information', 'learning', 'light', 'lightbulb', 'mode', 'on'],
            sizes_px: [24]
        }, {
            name: 'line_style',
            version: 12,
            popularity: 534,
            codepoint: 59673,
            unsupported_families: [],
            categories: ['action'],
            tags: ['dash', 'dotted', 'line', 'rule', 'spacing', 'style'],
            sizes_px: [24]
        }, {
            name: 'line_weight',
            version: 12,
            popularity: 610,
            codepoint: 59674,
            unsupported_families: [],
            categories: ['action'],
            tags: ['height', 'line', 'size', 'spacing', 'style', 'thickness', 'weight'],
            sizes_px: [24]
        }, {
            name: 'linear_scale',
            version: 15,
            popularity: 1055,
            codepoint: 57952,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['app', 'application', 'components', 'design', 'interface', 'layout', 'linear', 'measure', 'menu', 'scale', 'screen', 'site', 'slider', 'ui', 'ux', 'web', 'website', 'window'],
            sizes_px: [24]
        }, {
            name: 'link',
            version: 16,
            popularity: 8101,
            codepoint: 57687,
            unsupported_families: [],
            categories: ['content'],
            tags: ['chain', 'clip', 'connection', 'external', 'hyperlink', 'link', 'linked', 'links', 'multimedia', 'unlisted', 'url'],
            sizes_px: [24]
        }, {
            name: 'link_off',
            version: 9,
            popularity: 1498,
            codepoint: 57711,
            unsupported_families: [],
            categories: ['content'],
            tags: ['attached', 'chain', 'clip', 'connection', 'disabled', 'enabled', 'link', 'linked', 'links', 'multimedia', 'off', 'on', 'slash', 'unlink', 'url'],
            sizes_px: [24]
        }, {
            name: 'linked_camera',
            version: 13,
            popularity: 264,
            codepoint: 58424,
            unsupported_families: [],
            categories: ['image'],
            tags: ['camera', 'connect', 'connection', 'lens', 'linked', 'network', 'photo', 'photography', 'picture', 'signal', 'signals', 'sync', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'liquor',
            version: 8,
            popularity: 986,
            codepoint: 60000,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['alcohol', 'bar', 'bottle', 'club', 'cocktail', 'drink', 'food', 'liquor', 'party', 'store', 'wine'],
            sizes_px: [20, 24]
        }, {
            name: 'list',
            version: 12,
            popularity: 15412,
            codepoint: 59542,
            unsupported_families: [],
            categories: ['action'],
            tags: ['file', 'format', 'index', 'list', 'menu', 'options'],
            sizes_px: [24]
        }, {
            name: 'list_alt',
            version: 11,
            popularity: 5193,
            codepoint: 57582,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['alt', 'box', 'contained', 'format', 'lines', 'list', 'order', 'reorder', 'stacked', 'title'],
            sizes_px: [24]
        }, {
            name: 'live_help',
            version: 11,
            popularity: 2210,
            codepoint: 57542,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['?', 'assistance', 'bubble', 'chat', 'comment', 'communicate', 'help', 'info', 'information', 'live', 'message', 'punctuation', 'question mark', 'speech', 'support', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'live_tv',
            version: 9,
            popularity: 1967,
            codepoint: 58937,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['Android', 'OS', 'antennas hardware', 'chrome', 'desktop', 'device', 'iOS', 'live', 'mac', 'monitor', 'movie', 'play', 'stream', 'television', 'tv', 'web', 'window'],
            sizes_px: [24]
        }, {
            name: 'living',
            version: 7,
            popularity: 489,
            codepoint: 61483,
            unsupported_families: [],
            categories: ['search'],
            tags: ['chair', 'comfort', 'couch', 'decoration', 'furniture', 'home', 'house', 'living', 'lounging', 'loveseat', 'room', 'seat', 'seating', 'sofa'],
            sizes_px: [24]
        }, {
            name: 'local_activity',
            version: 14,
            popularity: 1803,
            codepoint: 58687,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['activity', 'event', 'local', 'star', 'things', 'ticket'],
            sizes_px: [24]
        }, {
            name: 'local_airport',
            version: 12,
            popularity: 967,
            codepoint: 58685,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['air', 'airplane', 'airport', 'flight', 'plane', 'transportation', 'travel', 'trip'],
            sizes_px: [20, 24]
        }, {
            name: 'local_atm',
            version: 10,
            popularity: 1834,
            codepoint: 58686,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['atm', 'bill', 'card', 'cart', 'cash', 'coin', 'commerce', 'credit', 'currency', 'dollars', 'local', 'money', 'online', 'pay', 'payment', 'shopping', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'local_bar',
            version: 10,
            popularity: 1125,
            codepoint: 58688,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['alcohol', 'bar', 'bottle', 'club', 'cocktail', 'drink', 'food', 'liquor', 'local', 'wine'],
            sizes_px: [24]
        }, {
            name: 'local_cafe',
            version: 9,
            popularity: 1908,
            codepoint: 58689,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['bottle', 'cafe', 'coffee', 'cup', 'drink', 'food', 'restaurant', 'tea'],
            sizes_px: [24]
        }, {
            name: 'local_car_wash',
            version: 10,
            popularity: 311,
            codepoint: 58690,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['automobile', 'car', 'cars', 'local', 'maps', 'transportation', 'travel', 'vehicle', 'wash'],
            sizes_px: [24]
        }, {
            name: 'local_convenience_store',
            version: 14,
            popularity: 495,
            codepoint: 58691,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['--', '24', 'bill', 'building', 'business', 'card', 'cash', 'coin', 'commerce', 'company', 'convenience', 'credit', 'currency', 'dollars', 'local', 'maps', 'market', 'money', 'new', 'online', 'pay', 'payment', 'plus', 'shop', 'shopping', 'store', 'storefront', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'local_dining',
            version: 16,
            popularity: 1002,
            codepoint: 58710,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['dining', 'eat', 'food', 'fork', 'knife', 'local', 'meal', 'restaurant', 'spoon'],
            sizes_px: [24]
        }, {
            name: 'local_drink',
            version: 10,
            popularity: 813,
            codepoint: 58692,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['cup', 'drink', 'drop', 'droplet', 'liquid', 'local', 'park', 'water'],
            sizes_px: [24]
        }, {
            name: 'local_fire_department',
            version: 11,
            popularity: 3929,
            codepoint: 61269,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['911', 'department', 'fire', 'firefighter', 'flame', 'hot'],
            sizes_px: [24]
        }, {
            name: 'local_florist',
            version: 10,
            popularity: 1468,
            codepoint: 58693,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['florist', 'flower', 'local', 'shop'],
            sizes_px: [24]
        }, {
            name: 'local_gas_station',
            version: 10,
            popularity: 1185,
            codepoint: 58694,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['auto', 'car', 'gas', 'local', 'oil', 'station', 'vehicle'],
            sizes_px: [24]
        }, {
            name: 'local_grocery_store',
            version: 10,
            popularity: 1689,
            codepoint: 58695,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['grocery', 'market', 'shop', 'store'],
            sizes_px: [24]
        }, {
            name: 'local_hospital',
            version: 10,
            popularity: 2192,
            codepoint: 58696,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['911', 'aid', 'cross', 'emergency', 'first', 'hospital', 'local', 'medicine'],
            sizes_px: [24]
        }, {
            name: 'local_hotel',
            version: 11,
            popularity: 285,
            codepoint: 58697,
            unsupported_families: [],
            categories: ['maps'],
            tags: [],
            sizes_px: [24]
        }, {
            name: 'local_laundry_service',
            version: 14,
            popularity: 750,
            codepoint: 58698,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['cleaning', 'clothing', 'dry', 'dryer', 'hotel', 'laundry', 'local', 'service', 'washer'],
            sizes_px: [24]
        }, {
            name: 'local_library',
            version: 10,
            popularity: 2032,
            codepoint: 58699,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['book', 'community learning', 'library', 'local', 'read'],
            sizes_px: [24]
        }, {
            name: 'local_mall',
            version: 10,
            popularity: 2887,
            codepoint: 58700,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['bag', 'bill', 'building', 'business', 'buy', 'card', 'cart', 'cash', 'coin', 'commerce', 'credit', 'currency', 'dollars', 'handbag', 'local', 'mall', 'money', 'online', 'pay', 'payment', 'shop', 'shopping', 'store', 'storefront'],
            sizes_px: [24]
        }, {
            name: 'local_movies',
            version: 10,
            popularity: 419,
            codepoint: 58701,
            unsupported_families: [],
            categories: ['maps'],
            tags: [],
            sizes_px: [24]
        }, {
            name: 'local_offer',
            version: 14,
            popularity: 6289,
            codepoint: 58702,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['deal', 'discount', 'offer', 'price', 'shop', 'shopping', 'store', 'tag'],
            sizes_px: [24]
        }, {
            name: 'local_parking',
            version: 10,
            popularity: 1321,
            codepoint: 58703,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['alphabet', 'auto', 'car', 'character', 'font', 'garage', 'letter', 'local', 'park', 'parking', 'symbol', 'text', 'type', 'vehicle'],
            sizes_px: [24]
        }, {
            name: 'local_pharmacy',
            version: 10,
            popularity: 660,
            codepoint: 58704,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['911', 'aid', 'cross', 'emergency', 'first', 'hospital', 'local', 'medicine', 'pharmacy', 'places'],
            sizes_px: [24]
        }, {
            name: 'local_phone',
            version: 12,
            popularity: 1546,
            codepoint: 58705,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['booth', 'call', 'communication', 'phone', 'telecommunication'],
            sizes_px: [24]
        }, {
            name: 'local_pizza',
            version: 10,
            popularity: 748,
            codepoint: 58706,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['drink', 'fastfood', 'food', 'local', 'meal', 'pizza'],
            sizes_px: [24]
        }, {
            name: 'local_play',
            version: 10,
            popularity: 227,
            codepoint: 58707,
            unsupported_families: [],
            categories: ['maps'],
            tags: [],
            sizes_px: [24]
        }, {
            name: 'local_police',
            version: 11,
            popularity: 1623,
            codepoint: 61270,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['911', 'badge', 'law', 'local', 'officer', 'police', 'protect', 'protection', 'security', 'shield'],
            sizes_px: [24]
        }, {
            name: 'local_post_office',
            version: 10,
            popularity: 1271,
            codepoint: 58708,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['delivery', 'email', 'envelop', 'letter', 'local', 'mail', 'message', 'office', 'package', 'parcel', 'post', 'postal', 'send', 'stamp'],
            sizes_px: [24]
        }, {
            name: 'local_printshop',
            version: 15,
            popularity: 744,
            codepoint: 58709,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['draft', 'fax', 'ink', 'local', 'machine', 'office', 'paper', 'print', 'printer', 'printshop', 'send'],
            sizes_px: [24]
        }, {
            name: 'local_see',
            version: 14,
            popularity: 534,
            codepoint: 58711,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['camera', 'lens', 'local', 'photo', 'photography', 'picture', 'see'],
            sizes_px: [24]
        }, {
            name: 'local_shipping',
            version: 10,
            popularity: 18567,
            codepoint: 58712,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['automobile', 'car', 'cars', 'delivery', 'letter', 'local', 'mail', 'maps', 'office', 'package', 'parcel', 'post', 'postal', 'send', 'shipping', 'shopping', 'stamp', 'transportation', 'truck', 'vehicle'],
            sizes_px: [24]
        }, {
            name: 'local_taxi',
            version: 10,
            popularity: 835,
            codepoint: 58713,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['automobile', 'cab', 'call', 'car', 'cars', 'direction', 'local', 'lyft', 'maps', 'public', 'taxi', 'transportation', 'uber', 'vehicle', 'yellow'],
            sizes_px: [24]
        }, {
            name: 'location_city',
            version: 10,
            popularity: 3125,
            codepoint: 59377,
            unsupported_families: [],
            categories: ['social'],
            tags: ['apartments', 'architecture', 'buildings', 'business', 'city', 'estate', 'home', 'landscape', 'location', 'place', 'real', 'residence', 'residential', 'shelter', 'town', 'urban'],
            sizes_px: [24]
        }, {
            name: 'location_disabled',
            version: 10,
            popularity: 174,
            codepoint: 57782,
            unsupported_families: [],
            categories: ['device'],
            tags: ['destination', 'direction', 'disabled', 'enabled', 'location', 'maps', 'off', 'on', 'pin', 'place', 'pointer', 'slash', 'stop', 'tracking'],
            sizes_px: [24]
        }, {
            name: 'location_off',
            version: 9,
            popularity: 472,
            codepoint: 57543,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['destination', 'direction', 'disabled', 'enabled', 'location', 'maps', 'off', 'on', 'pin', 'place', 'slash', 'stop'],
            sizes_px: [24]
        }, {
            name: 'location_on',
            version: 13,
            popularity: 20081,
            codepoint: 57544,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['destination', 'direction', 'disabled', 'enabled', 'location', 'maps', 'off', 'on', 'pin', 'place', 'slash', 'stop'],
            sizes_px: [24]
        }, {
            name: 'location_searching',
            version: 10,
            popularity: 871,
            codepoint: 57783,
            unsupported_families: [],
            categories: ['device'],
            tags: ['destination', 'direction', 'location', 'maps', 'pin', 'place', 'pointer', 'searching', 'stop', 'tracking'],
            sizes_px: [24]
        }, {
            name: 'lock',
            version: 13,
            popularity: 22730,
            codepoint: 59543,
            unsupported_families: [],
            categories: ['action'],
            tags: ['lock', 'locked', 'password', 'privacy', 'private', 'protection', 'safety', 'secure', 'security'],
            sizes_px: [24]
        }, {
            name: 'lock_clock',
            version: 9,
            popularity: 1044,
            codepoint: 61271,
            unsupported_families: [],
            categories: ['action'],
            tags: ['clock', 'date', 'lock', 'locked', 'password', 'privacy', 'private', 'protection', 'safety', 'schedule', 'secure', 'security', 'time'],
            sizes_px: [20, 24]
        }, {
            name: 'lock_open',
            version: 11,
            popularity: 6794,
            codepoint: 59544,
            unsupported_families: [],
            categories: ['action'],
            tags: ['lock', 'open', 'password', 'privacy', 'private', 'protection', 'safety', 'secure', 'security', 'unlocked'],
            sizes_px: [24]
        }, {
            name: 'login',
            version: 10,
            popularity: 14211,
            codepoint: 60023,
            unsupported_families: [],
            categories: ['action'],
            tags: ['access', 'app', 'application', 'arrow', 'components', 'design', 'enter', 'in', 'interface', 'left', 'log', 'login', 'screen', 'sign', 'site', 'ui', 'ux', 'web', 'website'],
            sizes_px: [20, 24]
        }, {
            name: 'logout',
            version: 10,
            popularity: 27883,
            codepoint: 59834,
            unsupported_families: [],
            categories: ['action'],
            tags: ['app', 'application', 'arrow', 'components', 'design', 'exit', 'interface', 'leave', 'log', 'login', 'logout', 'right', 'screen', 'site', 'ui', 'ux', 'web', 'website'],
            sizes_px: [24]
        }, {
            name: 'looks',
            version: 11,
            popularity: 320,
            codepoint: 58364,
            unsupported_families: [],
            categories: ['image'],
            tags: ['circle', 'half', 'looks', 'rainbow'],
            sizes_px: [24]
        }, {
            name: 'looks_3',
            version: 10,
            popularity: 777,
            codepoint: 58363,
            unsupported_families: [],
            categories: ['image'],
            tags: ['3', 'digit', 'looks', 'numbers', 'square', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'looks_4',
            version: 10,
            popularity: 433,
            codepoint: 58365,
            unsupported_families: [],
            categories: ['image'],
            tags: ['4', 'digit', 'looks', 'numbers', 'square', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'looks_5',
            version: 10,
            popularity: 358,
            codepoint: 58366,
            unsupported_families: [],
            categories: ['image'],
            tags: ['5', 'digit', 'looks', 'numbers', 'square', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'looks_6',
            version: 11,
            popularity: 301,
            codepoint: 58367,
            unsupported_families: [],
            categories: ['image'],
            tags: ['6', 'digit', 'looks', 'numbers', 'square', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'looks_one',
            version: 10,
            popularity: 1750,
            codepoint: 58368,
            unsupported_families: [],
            categories: ['image'],
            tags: ['1', 'digit', 'looks', 'numbers', 'square', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'looks_two',
            version: 10,
            popularity: 888,
            codepoint: 58369,
            unsupported_families: [],
            categories: ['image'],
            tags: ['2', 'digit', 'looks', 'numbers', 'square', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'loop',
            version: 10,
            popularity: 1946,
            codepoint: 57384,
            unsupported_families: [],
            categories: ['av'],
            tags: ['around', 'arrow', 'arrows', 'direction', 'inprogress', 'load', 'loading refresh', 'loop', 'music', 'navigation', 'renew', 'rotate', 'turn'],
            sizes_px: [24]
        }, {
            name: 'loupe',
            version: 10,
            popularity: 553,
            codepoint: 58370,
            unsupported_families: [],
            categories: ['image'],
            tags: ['+', 'add', 'details', 'focus', 'glass', 'loupe', 'magnifying', 'new', 'plus', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'low_priority',
            version: 13,
            popularity: 779,
            codepoint: 57709,
            unsupported_families: [],
            categories: ['content'],
            tags: ['arrange', 'arrow', 'backward', 'bottom', 'list', 'low', 'move', 'order', 'priority'],
            sizes_px: [24]
        }, {
            name: 'loyalty',
            version: 10,
            popularity: 2856,
            codepoint: 59546,
            unsupported_families: [],
            categories: ['action'],
            tags: ['card', 'credit', 'loyalty', 'membership', 'miles', 'points', 'program', 'subscription heart', 'tag', 'travel', 'trip'],
            sizes_px: [24]
        }, {
            name: 'lte_mobiledata',
            version: 7,
            popularity: 178,
            codepoint: 61484,
            unsupported_families: [],
            categories: ['device'],
            tags: ['alphabet', 'character', 'data', 'font', 'internet', 'letter', 'lte', 'mobile', 'network', 'speed', 'symbol', 'text', 'type', 'wifi', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'lte_plus_mobiledata',
            version: 7,
            popularity: 155,
            codepoint: 61485,
            unsupported_families: [],
            categories: ['device'],
            tags: ['+', 'alphabet', 'character', 'data', 'font', 'internet', 'letter', 'lte', 'mobile', 'network', 'plus', 'speed', 'symbol', 'text', 'type', 'wifi', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'luggage',
            version: 5,
            popularity: 1099,
            codepoint: 62005,
            unsupported_families: [],
            categories: ['social'],
            tags: ['airport', 'bag', 'baggage', 'carry', 'flight', 'hotel', 'luggage', 'on', 'suitcase', 'travel', 'trip'],
            sizes_px: [24]
        }, {
            name: 'lunch_dining',
            version: 9,
            popularity: 1936,
            codepoint: 60001,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['breakfast', 'dining', 'dinner', 'drink', 'fastfood', 'food', 'hamburger', 'lunch', 'meal'],
            sizes_px: [20, 24]
        }, {
            name: 'mail',
            version: 11,
            popularity: 8400,
            codepoint: 57688,
            unsupported_families: [],
            categories: ['content'],
            tags: ['email', 'envelop', 'envelope', 'inbox', 'letter', 'mail', 'message', 'send'],
            sizes_px: [24]
        }, {
            name: 'mail_outline',
            version: 10,
            popularity: 6562,
            codepoint: 57569,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['email', 'envelop', 'letter', 'mail', 'message', 'outline', 'send'],
            sizes_px: [24]
        }, {
            name: 'male',
            version: 1,
            popularity: 1852,
            codepoint: 58766,
            unsupported_families: [],
            categories: ['social'],
            tags: ['boy', 'gender', 'male', 'man', 'social', 'symbol'],
            sizes_px: [20, 24]
        }, {
            name: 'manage_accounts',
            version: 8,
            popularity: 17229,
            codepoint: 61486,
            unsupported_families: [],
            categories: ['action'],
            tags: ['accounts', 'change', 'details service-human', 'face', 'gear', 'manage', 'options', 'people', 'person', 'profile', 'settings', 'user'],
            sizes_px: [24]
        }, {
            name: 'manage_search',
            version: 8,
            popularity: 4393,
            codepoint: 61487,
            unsupported_families: [],
            categories: ['search'],
            tags: ['glass', 'history', 'magnifying', 'manage', 'search', 'text'],
            sizes_px: [24]
        }, {
            name: 'map',
            version: 11,
            popularity: 6378,
            codepoint: 58715,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['destination', 'direction', 'location', 'map', 'maps', 'pin', 'place', 'route', 'stop', 'travel'],
            sizes_px: [24]
        }, {
            name: 'maps_home_work',
            version: 8,
            popularity: 3496,
            codepoint: 61488,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['building', 'home', 'house', 'maps', 'office', 'work'],
            sizes_px: [24]
        }, {
            name: 'maps_ugc',
            version: 11,
            popularity: 781,
            codepoint: 61272,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['+', 'add', 'bubble', 'comment', 'communicate', 'feedback', 'maps', 'message', 'new', 'plus', 'speech', 'symbol', 'ugc'],
            sizes_px: [24]
        }, {
            name: 'margin',
            version: 9,
            popularity: 221,
            codepoint: 59835,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['design', 'layout', 'margin', 'padding', 'size', 'square'],
            sizes_px: [24]
        }, {
            name: 'mark_as_unread',
            version: 8,
            popularity: 1385,
            codepoint: 59836,
            unsupported_families: [],
            categories: ['action'],
            tags: ['as', 'envelop', 'letter', 'mail', 'mark', 'post', 'postal', 'read', 'receive', 'send', 'unread'],
            sizes_px: [20, 24]
        }, {
            name: 'mark_chat_read',
            version: 6,
            popularity: 621,
            codepoint: 61835,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['approve', 'bubble', 'chat', 'check', 'comment', 'communicate', 'complete', 'done', 'mark', 'message', 'ok', 'read', 'select', 'sent', 'speech', 'tick', 'verified', 'yes'],
            sizes_px: [20, 24]
        }, {
            name: 'mark_chat_unread',
            version: 6,
            popularity: 920,
            codepoint: 61833,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['bubble', 'chat', 'circle', 'comment', 'communicate', 'mark', 'message', 'notification', 'speech', 'unread'],
            sizes_px: [20, 24]
        }, {
            name: 'mark_email_read',
            version: 6,
            popularity: 1675,
            codepoint: 61836,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['approve', 'check', 'complete', 'done', 'email', 'envelop', 'letter', 'mail', 'mark', 'message', 'note', 'ok', 'read', 'select', 'send', 'sent', 'tick', 'yes'],
            sizes_px: [20, 24]
        }, {
            name: 'mark_email_unread',
            version: 6,
            popularity: 1294,
            codepoint: 61834,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['check', 'circle', 'email', 'envelop', 'letter', 'mail', 'mark', 'message', 'note', 'notification', 'send', 'unread'],
            sizes_px: [20, 24]
        }, {
            name: 'markunread',
            version: 10,
            popularity: 1433,
            codepoint: 57689,
            unsupported_families: [],
            categories: ['content'],
            tags: ['email', 'envelop', 'letter', 'mail', 'markunread', 'message', 'send', 'unread'],
            sizes_px: [24]
        }, {
            name: 'markunread_mailbox',
            version: 10,
            popularity: 973,
            codepoint: 59547,
            unsupported_families: [],
            categories: ['action'],
            tags: ['deliver', 'envelop', 'letter', 'mail', 'mailbox', 'markunread', 'post', 'postal', 'postbox', 'receive', 'send', 'unread'],
            sizes_px: [24]
        }, {
            name: 'masks',
            version: 5,
            popularity: 1850,
            codepoint: 61976,
            unsupported_families: [],
            categories: ['social'],
            tags: ['air', 'cover', 'covid', 'face', 'hospital', 'masks', 'medical', 'pollution', 'protection', 'respirator', 'sick', 'social'],
            sizes_px: [24]
        }, {
            name: 'maximize',
            version: 9,
            popularity: 1437,
            codepoint: 59696,
            unsupported_families: [],
            categories: ['action'],
            tags: ['app', 'application', 'components', 'design', 'interface', 'line', 'maximize', 'screen', 'shape', 'site', 'ui', 'ux', 'web', 'website'],
            sizes_px: [24]
        }, {
            name: 'media_bluetooth_off',
            version: 8,
            popularity: 124,
            codepoint: 61489,
            unsupported_families: [],
            categories: ['device'],
            tags: ['bluetooth', 'connect', 'connection', 'connectivity', 'device', 'disabled', 'enabled', 'media', 'music', 'note', 'off', 'offline', 'on', 'paring', 'signal', 'slash', 'symbol', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'media_bluetooth_on',
            version: 8,
            popularity: 181,
            codepoint: 61490,
            unsupported_families: [],
            categories: ['device'],
            tags: ['bluetooth', 'connect', 'connection', 'connectivity', 'device', 'disabled', 'enabled', 'media', 'music', 'note', 'off', 'on', 'online', 'paring', 'signal', 'slash', 'symbol', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'mediation',
            version: 13,
            popularity: 1340,
            codepoint: 61351,
            unsupported_families: [],
            categories: ['action'],
            tags: ['alternative', 'compromise', 'mediation', 'negotiation', 'party', 'structure'],
            sizes_px: [24]
        }, {
            name: 'medical_services',
            version: 10,
            popularity: 2477,
            codepoint: 61705,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['aid', 'bag', 'briefcase', 'emergency', 'first', 'kit', 'medical', 'medicine', 'services'],
            sizes_px: [20, 24]
        }, {
            name: 'medication',
            version: 8,
            popularity: 2090,
            codepoint: 61491,
            unsupported_families: [],
            categories: ['device'],
            tags: ['doctor', 'drug', 'emergency', 'hospital', 'medication', 'medicine', 'pharmacy', 'pills', 'prescription'],
            sizes_px: [24]
        }, {
            name: 'meeting_room',
            version: 15,
            popularity: 2110,
            codepoint: 60239,
            unsupported_families: [],
            categories: ['places'],
            tags: ['building', 'door', 'doorway', 'entrance', 'home', 'house', 'interior', 'meeting', 'office', 'open', 'places', 'room'],
            sizes_px: [24]
        }, {
            name: 'memory',
            version: 10,
            popularity: 1734,
            codepoint: 58146,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['card', 'chip', 'digital', 'memory', 'micro', 'processor', 'sd', 'storage'],
            sizes_px: [24]
        }, {
            name: 'menu',
            version: 11,
            popularity: 40988,
            codepoint: 58834,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['app', 'application', 'components', 'hamburger', 'interface', 'line', 'lines', 'menu', 'screen', 'site', 'ui', 'ux', 'web', 'website'],
            sizes_px: [24]
        }, {
            name: 'menu_book',
            version: 10,
            popularity: 7151,
            codepoint: 59929,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['book', 'dining', 'food', 'meal', 'menu', 'restaurant'],
            sizes_px: [24]
        }, {
            name: 'menu_open',
            version: 11,
            popularity: 5037,
            codepoint: 59837,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['app', 'application', 'arrow', 'components', 'hamburger', 'interface', 'left', 'line', 'lines', 'menu', 'open', 'screen', 'site', 'ui', 'ux', 'web', 'website'],
            sizes_px: [24]
        }, {
            name: 'merge_type',
            version: 11,
            popularity: 618,
            codepoint: 57938,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['arrow', 'combine', 'direction', 'format', 'merge', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'message',
            version: 11,
            popularity: 2890,
            codepoint: 57545,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['bubble', 'chat', 'comment', 'communicate', 'feedback', 'message', 'speech'],
            sizes_px: [24]
        }, {
            name: 'mic',
            version: 11,
            popularity: 6792,
            codepoint: 57385,
            unsupported_families: [],
            categories: ['av'],
            tags: ['hear', 'hearing', 'mic', 'microphone', 'noise', 'record', 'search', 'sound', 'speech', 'voice'],
            sizes_px: [24]
        }, {
            name: 'mic_external_off',
            version: 9,
            popularity: 118,
            codepoint: 61273,
            unsupported_families: [],
            categories: ['image'],
            tags: ['audio', 'disabled', 'enabled', 'external', 'mic', 'microphone', 'off', 'on', 'slash', 'sound', 'voice'],
            sizes_px: [24]
        }, {
            name: 'mic_external_on',
            version: 9,
            popularity: 375,
            codepoint: 61274,
            unsupported_families: [],
            categories: ['image'],
            tags: ['audio', 'disabled', 'enabled', 'external', 'mic', 'microphone', 'off', 'on', 'slash', 'sound', 'voice'],
            sizes_px: [24]
        }, {
            name: 'mic_none',
            version: 10,
            popularity: 1340,
            codepoint: 57386,
            unsupported_families: [],
            categories: ['av'],
            tags: ['hear', 'hearing', 'mic', 'microphone', 'noise', 'none', 'record', 'sound', 'voice'],
            sizes_px: [24]
        }, {
            name: 'mic_off',
            version: 12,
            popularity: 1776,
            codepoint: 57387,
            unsupported_families: [],
            categories: ['av'],
            tags: ['audio', 'disabled', 'enabled', 'hear', 'hearing', 'mic', 'microphone', 'noise', 'off', 'on', 'record', 'recording', 'slash', 'sound', 'voice'],
            sizes_px: [24]
        }, {
            name: 'microwave',
            version: 4,
            popularity: 432,
            codepoint: 61956,
            unsupported_families: [],
            categories: ['places'],
            tags: ['appliance', 'cooking', 'electric', 'heat', 'home', 'house', 'kitchen', 'machine', 'microwave'],
            sizes_px: [24]
        }, {
            name: 'military_tech',
            version: 9,
            popularity: 3048,
            codepoint: 59967,
            unsupported_families: [],
            categories: ['social'],
            tags: ['army', 'award', 'badge', 'honor', 'medal', 'merit', 'military', 'order', 'privilege', 'prize', 'rank', 'reward', 'ribbon', 'soldier', 'star', 'status', 'tech', 'trophy', 'win', 'winner'],
            sizes_px: [20, 24]
        }, {
            name: 'minimize',
            version: 9,
            popularity: 3130,
            codepoint: 59697,
            unsupported_families: [],
            categories: ['action'],
            tags: ['app', 'application', 'components', 'design', 'interface', 'line', 'minimize', 'screen', 'shape', 'site', 'ui', 'ux', 'web', 'website'],
            sizes_px: [24]
        }, {
            name: 'miscellaneous_services',
            version: 10,
            popularity: 1798,
            codepoint: 61708,
            unsupported_families: [],
            categories: ['maps'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'missed_video_call',
            version: 11,
            popularity: 168,
            codepoint: 57459,
            unsupported_families: [],
            categories: ['av'],
            tags: ['arrow', 'call', 'camera', 'film', 'filming', 'hardware', 'image', 'missed', 'motion', 'picture', 'record', 'video', 'videography'],
            sizes_px: [24]
        }, {
            name: 'mms',
            version: 10,
            popularity: 267,
            codepoint: 58904,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['bubble', 'chat', 'comment', 'communicate', 'feedback', 'image', 'landscape', 'message', 'mms', 'mountain', 'mountains', 'multimedia', 'photo', 'photography', 'picture', 'speech'],
            sizes_px: [24]
        }, {
            name: 'mobile_friendly',
            version: 10,
            popularity: 485,
            codepoint: 57856,
            unsupported_families: [],
            categories: ['device'],
            tags: ['Android', 'OS', 'approve', 'cell', 'check', 'complete', 'device', 'done', 'friendly', 'hardware', 'iOS', 'mark', 'mobile', 'ok', 'phone', 'select', 'tablet', 'tick', 'validate', 'verified', 'yes'],
            sizes_px: [24]
        }, {
            name: 'mobile_off',
            version: 10,
            popularity: 149,
            codepoint: 57857,
            unsupported_families: [],
            categories: ['device'],
            tags: ['Android', 'OS', 'cell', 'device', 'disabled', 'enabled', 'hardware', 'iOS', 'mobile', 'off', 'on', 'phone', 'silence', 'slash', 'tablet'],
            sizes_px: [24]
        }, {
            name: 'mobile_screen_share',
            version: 10,
            popularity: 397,
            codepoint: 57575,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['Android', 'OS', 'cast', 'cell', 'device', 'hardware', 'iOS', 'mirror', 'mobile', 'monitor', 'phone', 'screen', 'screencast', 'share', 'stream', 'streaming', 'tablet', 'tv', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'mobiledata_off',
            version: 8,
            popularity: 344,
            codepoint: 61492,
            unsupported_families: [],
            categories: ['device'],
            tags: ['arrow', 'data', 'disabled', 'down', 'enabled', 'internet', 'mobile', 'network', 'off', 'on', 'slash', 'speed', 'up', 'wifi', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'mode',
            version: 8,
            popularity: 1722,
            codepoint: 61591,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['compose', 'create', 'draft', 'draw', 'edit', 'mode', 'pen', 'pencil', 'write'],
            sizes_px: [24]
        }, {
            name: 'mode_comment',
            version: 10,
            popularity: 1263,
            codepoint: 57939,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['bubble', 'chat', 'comment', 'communicate', 'feedback', 'message', 'mode comment', 'speech'],
            sizes_px: [24]
        }, {
            name: 'mode_edit',
            version: 9,
            popularity: 5950,
            codepoint: 57940,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['compose', 'create', 'draft', 'draw', 'edit', 'mode', 'pen', 'pencil', 'write'],
            sizes_px: [24]
        }, {
            name: 'mode_edit_outline',
            version: 8,
            popularity: 1329,
            codepoint: 61493,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['compose', 'create', 'draft', 'draw', 'edit', 'mode', 'outline', 'pen', 'pencil', 'write'],
            sizes_px: [20, 24]
        }, {
            name: 'mode_night',
            version: 8,
            popularity: 748,
            codepoint: 61494,
            unsupported_families: [],
            categories: ['device'],
            tags: ['dark', 'disturb', 'mode', 'moon', 'night', 'sleep', 'weather'],
            sizes_px: [24]
        }, {
            name: 'mode_standby',
            version: 7,
            popularity: 419,
            codepoint: 61495,
            unsupported_families: [],
            categories: ['device'],
            tags: ['disturb', 'mode', 'power', 'sleep', 'standby', 'target'],
            sizes_px: [24]
        }, {
            name: 'model_training',
            version: 11,
            popularity: 1902,
            codepoint: 61647,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrow', 'bulb', 'idea', 'inprogress', 'light', 'load', 'loading', 'model', 'refresh', 'renew', 'restore', 'reverse', 'rotate', 'training'],
            sizes_px: [20, 24]
        }, {
            name: 'monetization_on',
            version: 10,
            popularity: 5093,
            codepoint: 57955,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['bill', 'card', 'cash', 'circle', 'coin', 'commerce', 'cost', 'credit', 'currency', 'dollars', 'finance', 'monetization', 'money', 'on', 'online', 'pay', 'payment', 'shopping', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'money',
            version: 9,
            popularity: 1298,
            codepoint: 58749,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['100', 'bill', 'card', 'cash', 'coin', 'commerce', 'cost', 'credit', 'currency', 'digit', 'dollars', 'finance', 'money', 'number', 'online', 'pay', 'payment', 'price', 'shopping', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'money_off',
            version: 10,
            popularity: 873,
            codepoint: 57948,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['bill', 'card', 'cart', 'cash', 'coin', 'commerce', 'credit', 'currency', 'disabled', 'dollars', 'enabled', 'money', 'off', 'on', 'online', 'pay', 'payment', 'shopping', 'slash', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'money_off_csred',
            version: 9,
            popularity: 426,
            codepoint: 61496,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['bill', 'card', 'cart', 'cash', 'coin', 'commerce', 'credit', 'csred', 'currency', 'disabled', 'dollars', 'enabled', 'money', 'off', 'on', 'online', 'pay', 'payment', 'shopping', 'slash', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'monitor',
            version: 9,
            popularity: 667,
            codepoint: 61275,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['Android', 'OS', 'chrome', 'device', 'display', 'hardware', 'iOS', 'mac', 'monitor', 'screen', 'web', 'window'],
            sizes_px: [24]
        }, {
            name: 'monitor_weight',
            version: 8,
            popularity: 864,
            codepoint: 61497,
            unsupported_families: [],
            categories: ['device'],
            tags: ['body', 'device', 'diet', 'health', 'monitor', 'scale', 'smart', 'weight'],
            sizes_px: [24]
        }, {
            name: 'monochrome_photos',
            version: 9,
            popularity: 197,
            codepoint: 58371,
            unsupported_families: [],
            categories: ['image'],
            tags: ['black', 'camera', 'image', 'monochrome', 'photo', 'photography', 'photos', 'picture', 'white'],
            sizes_px: [24]
        }, {
            name: 'mood',
            version: 11,
            popularity: 1943,
            codepoint: 59378,
            unsupported_families: [],
            categories: ['social'],
            tags: ['emoji', 'emotions', 'expressions', 'face', 'feelings', 'glad', 'happiness', 'happy', 'like', 'mood', 'person', 'pleased', 'smile', 'smiling', 'social', 'survey'],
            sizes_px: [24]
        }, {
            name: 'mood_bad',
            version: 10,
            popularity: 1133,
            codepoint: 59379,
            unsupported_families: [],
            categories: ['social'],
            tags: ['bad', 'disappointment', 'dislike', 'emoji', 'emotions', 'expressions', 'face', 'feelings', 'mood', 'person', 'rating', 'social', 'survey', 'unhappiness', 'unhappy', 'unpleased', 'unsmile', 'unsmiling'],
            sizes_px: [24]
        }, {
            name: 'moped',
            version: 12,
            popularity: 424,
            codepoint: 60200,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['automobile', 'car', 'cars', 'direction', 'maps', 'moped', 'motorized', 'public', 'scooter', 'transportation', 'vehicle', 'vespa'],
            sizes_px: [20, 24]
        }, {
            name: 'more',
            version: 11,
            popularity: 1071,
            codepoint: 58905,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['3', 'archive', 'bookmark', 'dots', 'etc', 'favorite', 'indent', 'label', 'more', 'remember', 'save', 'stamp', 'sticker', 'tab', 'tag', 'three'],
            sizes_px: [24]
        }, {
            name: 'more_horiz',
            version: 11,
            popularity: 10426,
            codepoint: 58835,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['3', 'app', 'application', 'components', 'dots', 'etc', 'horiz', 'horizontal', 'interface', 'ios', 'more', 'screen', 'site', 'three', 'ui', 'ux', 'web', 'website'],
            sizes_px: [24]
        }, {
            name: 'more_time',
            version: 9,
            popularity: 1329,
            codepoint: 59997,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['+', 'add', 'clock', 'date', 'more', 'new', 'plus', 'schedule', 'symbol', 'time'],
            sizes_px: [20, 24]
        }, {
            name: 'more_vert',
            version: 14,
            popularity: 15065,
            codepoint: 58836,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['3', 'android', 'app', 'application', 'components', 'dots', 'etc', 'interface', 'more', 'screen', 'site', 'three', 'ui', 'ux', 'vert', 'vertical', 'web', 'website'],
            sizes_px: [24]
        }, {
            name: 'motion_photos_auto',
            version: 13,
            popularity: 319,
            codepoint: 61498,
            unsupported_families: [],
            categories: ['image'],
            tags: ['A', 'alphabet', 'animation', 'auto', 'automatic', 'character', 'circle', 'font', 'gif', 'letter', 'live', 'motion', 'photos', 'symbol', 'text', 'type', 'video'],
            sizes_px: [24]
        }, {
            name: 'motion_photos_off',
            version: 12,
            popularity: 161,
            codepoint: 59840,
            unsupported_families: [],
            categories: ['image'],
            tags: ['animation', 'circle', 'disabled', 'enabled', 'motion', 'off', 'on', 'photos', 'slash', 'video'],
            sizes_px: [24]
        }, {
            name: 'motion_photos_on',
            version: 16,
            popularity: 431,
            codepoint: 59841,
            unsupported_families: [],
            categories: ['image'],
            tags: ['animation', 'circle', 'disabled', 'enabled', 'motion', 'off', 'on', 'photos', 'play', 'slash', 'video'],
            sizes_px: [20, 24]
        }, {
            name: 'motion_photos_pause',
            version: 6,
            popularity: 134,
            codepoint: 61991,
            unsupported_families: [],
            categories: ['image'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'motion_photos_paused',
            version: 15,
            popularity: 192,
            codepoint: 59842,
            unsupported_families: [],
            categories: ['image'],
            tags: ['animation', 'circle', 'motion', 'pause', 'paused', 'photos', 'video'],
            sizes_px: [24]
        }, {
            name: 'mouse',
            version: 10,
            popularity: 1262,
            codepoint: 58147,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['click', 'computer', 'cursor', 'device', 'hardware', 'mouse', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'move_to_inbox',
            version: 13,
            popularity: 996,
            codepoint: 57704,
            unsupported_families: [],
            categories: ['content'],
            tags: ['archive', 'arrow', 'down', 'email', 'envelop', 'inbox', 'incoming', 'letter', 'mail', 'message', 'move to', 'send'],
            sizes_px: [24]
        }, {
            name: 'movie',
            version: 10,
            popularity: 2685,
            codepoint: 57388,
            unsupported_families: [],
            categories: ['av'],
            tags: ['cinema', 'film', 'media', 'movie', 'slate', 'video'],
            sizes_px: [24]
        }, {
            name: 'movie_creation',
            version: 10,
            popularity: 603,
            codepoint: 58372,
            unsupported_families: [],
            categories: ['image'],
            tags: ['clapperboard', 'creation', 'film', 'movie', 'movies', 'slate', 'video'],
            sizes_px: [24]
        }, {
            name: 'movie_filter',
            version: 11,
            popularity: 410,
            codepoint: 58426,
            unsupported_families: [],
            categories: ['image'],
            tags: ['clapperboard', 'creation', 'film', 'filter', 'movie', 'movies', 'slate', 'stars', 'video'],
            sizes_px: [24]
        }, {
            name: 'moving',
            version: 2,
            popularity: 917,
            codepoint: 58625,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['arrow', 'direction', 'moving', 'navigation', 'travel', 'up'],
            sizes_px: [20, 24]
        }, {
            name: 'mp',
            version: 13,
            popularity: 107,
            codepoint: 59843,
            unsupported_families: [],
            categories: ['image'],
            tags: ['alphabet', 'character', 'font', 'image', 'letter', 'megapixel', 'mp', 'photo', 'photography', 'pixels', 'quality', 'resolution', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'multiline_chart',
            version: 11,
            popularity: 384,
            codepoint: 59103,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['analytics', 'bar', 'bars', 'chart', 'data', 'diagram', 'graph', 'infographic', 'line', 'measure', 'metrics', 'multiple', 'statistics', 'tracking'],
            sizes_px: [24]
        }, {
            name: 'multiple_stop',
            version: 5,
            popularity: 661,
            codepoint: 61881,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['arrows', 'directions', 'dots', 'left', 'maps', 'multiple', 'navigation', 'right', 'stop'],
            sizes_px: [24]
        }, {
            name: 'museum',
            version: 9,
            popularity: 624,
            codepoint: 59958,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['architecture', 'attraction', 'building', 'estate', 'event', 'exhibition', 'explore', 'local', 'museum', 'palces', 'real', 'see', 'shop', 'store', 'tour'],
            sizes_px: [20, 24]
        }, {
            name: 'music_note',
            version: 10,
            popularity: 2922,
            codepoint: 58373,
            unsupported_families: [],
            categories: ['image'],
            tags: ['audio', 'audiotrack', 'key', 'music', 'note', 'sound', 'track'],
            sizes_px: [24]
        }, {
            name: 'music_off',
            version: 10,
            popularity: 373,
            codepoint: 58432,
            unsupported_families: [],
            categories: ['image'],
            tags: ['audio', 'audiotrack', 'disabled', 'enabled', 'key', 'music', 'note', 'off', 'on', 'slash', 'sound', 'track'],
            sizes_px: [24]
        }, {
            name: 'music_video',
            version: 13,
            popularity: 342,
            codepoint: 57443,
            unsupported_families: [],
            categories: ['av'],
            tags: ['band', 'music', 'mv', 'recording', 'screen', 'tv', 'video', 'watch'],
            sizes_px: [24]
        }, {
            name: 'my_location',
            version: 10,
            popularity: 3377,
            codepoint: 58716,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['destination', 'direction', 'location', 'maps', 'navigation', 'pin', 'place', 'point', 'stop'],
            sizes_px: [24]
        }, {
            name: 'nat',
            version: 9,
            popularity: 219,
            codepoint: 61276,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['communication', 'nat'],
            sizes_px: [20, 24]
        }, {
            name: 'nature',
            version: 10,
            popularity: 479,
            codepoint: 58374,
            unsupported_families: [],
            categories: ['image'],
            tags: ['forest', 'nature', 'outdoor', 'outside', 'park', 'tree', 'wilderness'],
            sizes_px: [24]
        }, {
            name: 'nature_people',
            version: 10,
            popularity: 729,
            codepoint: 58375,
            unsupported_families: [],
            categories: ['image'],
            tags: ['activity', 'body', 'forest', 'human', 'nature', 'outdoor', 'outside', 'park', 'people', 'person', 'tree', 'wilderness'],
            sizes_px: [24]
        }, {
            name: 'navigate_before',
            version: 11,
            popularity: 3920,
            codepoint: 58376,
            unsupported_families: [],
            categories: ['image'],
            tags: ['arrow', 'arrows', 'before', 'direction', 'left', 'navigate'],
            sizes_px: [24]
        }, {
            name: 'navigate_next',
            version: 11,
            popularity: 11264,
            codepoint: 58377,
            unsupported_families: [],
            categories: ['image'],
            tags: ['arrow', 'arrows', 'direction', 'navigate', 'next', 'right'],
            sizes_px: [24]
        }, {
            name: 'navigation',
            version: 10,
            popularity: 1317,
            codepoint: 58717,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['destination', 'direction', 'location', 'maps', 'navigation', 'pin', 'place', 'point', 'stop'],
            sizes_px: [24]
        }, {
            name: 'near_me',
            version: 10,
            popularity: 2800,
            codepoint: 58729,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['destination', 'direction', 'location', 'maps', 'me', 'navigation', 'near', 'pin', 'place', 'point', 'stop'],
            sizes_px: [24]
        }, {
            name: 'near_me_disabled',
            version: 4,
            popularity: 203,
            codepoint: 61935,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['destination', 'direction', 'disabled', 'enabled', 'location', 'maps', 'me', 'navigation', 'near', 'off', 'on', 'pin', 'place', 'point', 'slash'],
            sizes_px: [24]
        }, {
            name: 'nearby_error',
            version: 8,
            popularity: 204,
            codepoint: 61499,
            unsupported_families: [],
            categories: ['device'],
            tags: ['!', 'alert', 'attention', 'caution', 'danger', 'error', 'exclamation', 'important', 'mark', 'nearby', 'notification', 'symbol', 'warning'],
            sizes_px: [24]
        }, {
            name: 'nearby_off',
            version: 8,
            popularity: 109,
            codepoint: 61500,
            unsupported_families: [],
            categories: ['device'],
            tags: ['disabled', 'enabled', 'nearby', 'off', 'on', 'slash'],
            sizes_px: [24]
        }, {
            name: 'network_cell',
            version: 14,
            popularity: 372,
            codepoint: 57785,
            unsupported_families: [],
            categories: ['device'],
            tags: ['cell', 'cellular', 'data', 'internet', 'mobile', 'network', 'phone', 'speed', 'wifi', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'network_check',
            version: 10,
            popularity: 598,
            codepoint: 58944,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['check', 'connect', 'connection', 'internet', 'meter', 'network', 'signal', 'speed', 'tick', 'wifi', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'network_locked',
            version: 15,
            popularity: 176,
            codepoint: 58906,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['alert', 'available', 'cellular', 'connection', 'data', 'error', 'internet', 'lock', 'locked', 'mobile', 'network', 'not', 'privacy',
                'private', 'protection', 'restricted', 'safety', 'secure', 'security', 'service', 'signal', 'warning', 'wifi', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'network_wifi',
            version: 14,
            popularity: 655,
            codepoint: 57786,
            unsupported_families: [],
            categories: ['device'],
            tags: ['cell', 'cellular', 'data', 'internet', 'mobile', 'network', 'phone', 'speed', 'wifi', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'new_label',
            version: 1,
            popularity: 687,
            codepoint: 58889,
            unsupported_families: [],
            categories: ['action'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'new_releases',
            version: 10,
            popularity: 2455,
            codepoint: 57393,
            unsupported_families: [],
            categories: ['av'],
            tags: ['!', 'alert', 'attention', 'burst', 'caution', 'danger', 'error', 'exclamation', 'important', 'mark', 'new', 'notification', 'release', 'releases', 'star', 'symbol', 'warning'],
            sizes_px: [24]
        }, {
            name: 'next_plan',
            version: 11,
            popularity: 1090,
            codepoint: 61277,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrow', 'circle', 'next', 'plan', 'right'],
            sizes_px: [20, 24]
        }, {
            name: 'next_week',
            version: 12,
            popularity: 480,
            codepoint: 57706,
            unsupported_families: [],
            categories: ['content'],
            tags: ['arrow', 'bag', 'baggage', 'briefcase', 'business', 'case', 'next', 'suitcase', 'week'],
            sizes_px: [24]
        }, {
            name: 'nfc',
            version: 10,
            popularity: 433,
            codepoint: 57787,
            unsupported_families: [],
            categories: ['device'],
            tags: ['communication', 'data', 'field', 'mobile', 'near', 'nfc', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'night_shelter',
            version: 4,
            popularity: 567,
            codepoint: 61937,
            unsupported_families: [],
            categories: ['places'],
            tags: ['architecture', 'bed', 'building', 'estate', 'homeless', 'house', 'night', 'place', 'real', 'shelter', 'sleep'],
            sizes_px: [24]
        }, {
            name: 'nightlife',
            version: 8,
            popularity: 561,
            codepoint: 60002,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['alcohol', 'bar', 'bottle', 'club', 'cocktail', 'dance', 'drink', 'food', 'glass', 'liquor', 'music', 'nightlife', 'note', 'wine'],
            sizes_px: [20, 24]
        }, {
            name: 'nightlight',
            version: 8,
            popularity: 1040,
            codepoint: 61501,
            unsupported_families: [],
            categories: ['device'],
            tags: ['dark', 'disturb', 'mode', 'moon', 'night', 'nightlight', 'sleep', 'weather'],
            sizes_px: [24]
        }, {
            name: 'nightlight_round',
            version: 8,
            popularity: 3248,
            codepoint: 61278,
            unsupported_families: [],
            categories: ['action'],
            tags: ['dark', 'half', 'light', 'mode', 'moon', 'night', 'nightlight', 'round'],
            sizes_px: [24]
        }, {
            name: 'nights_stay',
            version: 9,
            popularity: 1040,
            codepoint: 59974,
            unsupported_families: [],
            categories: ['social'],
            tags: ['cloud', 'crescent', 'dark', 'mode', 'moon', 'nights', 'phases', 'silence', 'silent', 'sky', 'stay', 'time', 'weather'],
            sizes_px: [20, 24]
        }, {
            name: 'no_accounts',
            version: 8,
            popularity: 1398,
            codepoint: 61502,
            unsupported_families: [],
            categories: ['action'],
            tags: ['account', 'accounts', 'avatar', 'disabled', 'enabled', 'face', 'human', 'no', 'off', 'offline', 'on', 'people', 'person', 'profile', 'slash', 'thumbnail', 'unavailable', 'unidentifiable', 'unknown', 'user'],
            sizes_px: [24]
        }, {
            name: 'no_backpack',
            version: 4,
            popularity: 140,
            codepoint: 62007,
            unsupported_families: [],
            categories: ['places'],
            tags: ['accessory', 'backpack', 'bag', 'bookbag', 'knapsack', 'no', 'pack', 'travel'],
            sizes_px: [24]
        }, {
            name: 'no_cell',
            version: 6,
            popularity: 145,
            codepoint: 61860,
            unsupported_families: [],
            categories: ['places'],
            tags: ['Android', 'OS', 'cell', 'device', 'disabled', 'enabled', 'hardware', 'iOS', 'mobile', 'no', 'off', 'on', 'phone', 'slash', 'tablet'],
            sizes_px: [24]
        }, {
            name: 'no_drinks',
            version: 6,
            popularity: 190,
            codepoint: 61861,
            unsupported_families: [],
            categories: ['places'],
            tags: ['alcohol', 'beverage', 'bottle', 'cocktail', 'drink', 'drinks', 'food', 'liquor', 'no', 'wine'],
            sizes_px: [24]
        }, {
            name: 'no_encryption',
            version: 12,
            popularity: 341,
            codepoint: 58945,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['disabled', 'enabled', 'encryption', 'lock', 'no', 'off', 'on', 'password', 'safety', 'security', 'slash'],
            sizes_px: [24]
        }, {
            name: 'no_encryption_gmailerrorred',
            version: 8,
            popularity: 243,
            codepoint: 61503,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['disabled', 'enabled', 'encryption', 'error', 'gmail', 'lock', 'locked', 'no', 'off', 'on', 'slash'],
            sizes_px: [24]
        }, {
            name: 'no_flash',
            version: 6,
            popularity: 166,
            codepoint: 61862,
            unsupported_families: [],
            categories: ['places'],
            tags: ['bolt', 'camera', 'disabled', 'enabled', 'flash', 'image', 'lightning', 'no', 'off', 'on', 'photo', 'photography', 'picture', 'slash', 'thunderbolt'],
            sizes_px: [24]
        }, {
            name: 'no_food',
            version: 6,
            popularity: 303,
            codepoint: 61863,
            unsupported_families: [],
            categories: ['places'],
            tags: ['disabled', 'drink', 'enabled', 'fastfood', 'food', 'hamburger', 'meal', 'no', 'off', 'on', 'slash'],
            sizes_px: [24]
        }, {
            name: 'no_luggage',
            version: 5,
            popularity: 226,
            codepoint: 62011,
            unsupported_families: [],
            categories: ['social'],
            tags: ['bag', 'baggage', 'carry', 'disabled', 'enabled', 'luggage', 'no', 'off', 'on', 'slash', 'suitcase', 'travel'],
            sizes_px: [24]
        }, {
            name: 'no_meals',
            version: 5,
            popularity: 226,
            codepoint: 61910,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['dining', 'disabled', 'eat', 'enabled', 'food', 'fork', 'knife', 'meal', 'meals', 'no', 'off', 'on', 'restaurant', 'slash', 'spoon', 'utensils'],
            sizes_px: [24]
        }, {
            name: 'no_meeting_room',
            version: 9,
            popularity: 215,
            codepoint: 60238,
            unsupported_families: [],
            categories: ['places'],
            tags: ['building', 'disabled', 'door', 'doorway', 'enabled', 'entrance', 'home', 'house', 'interior', 'meeting', 'no', 'off', 'office', 'on', 'open', 'places', 'room', 'slash'],
            sizes_px: [24]
        }, {
            name: 'no_photography',
            version: 6,
            popularity: 375,
            codepoint: 61864,
            unsupported_families: [],
            categories: ['places'],
            tags: ['camera', 'disabled', 'enabled', 'image', 'no', 'off', 'on', 'photo', 'photography', 'picture', 'slash'],
            sizes_px: [24]
        }, {
            name: 'no_sim',
            version: 10,
            popularity: 211,
            codepoint: 57548,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['camera', 'card', 'device', 'eject', 'insert', 'memory', 'no', 'phone', 'sim', 'storage'],
            sizes_px: [24]
        }, {
            name: 'no_stroller',
            version: 7,
            popularity: 135,
            codepoint: 61871,
            unsupported_families: [],
            categories: ['places'],
            tags: ['baby', 'care', 'carriage', 'child', 'children', 'disabled', 'enabled', 'infant', 'kid', 'newborn', 'no', 'off', 'on', 'parents', 'slash', 'stroller', 'toddler', 'young'],
            sizes_px: [24]
        }, {
            name: 'no_transfer',
            version: 5,
            popularity: 171,
            codepoint: 61909,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['automobile', 'bus', 'car', 'cars', 'direction', 'disabled', 'enabled', 'maps', 'no', 'off', 'on', 'public', 'slash', 'transfer', 'transportation', 'vehicle'],
            sizes_px: [24]
        }, {
            name: 'nordic_walking',
            version: 2,
            popularity: 436,
            codepoint: 58638,
            unsupported_families: [],
            categories: ['social'],
            tags: ['athlete', 'athletic', 'body', 'entertainment', 'exercise', 'hiking', 'hobby', 'human', 'nordic', 'people', 'person', 'social', 'sports', 'travel', 'walker', 'walking'],
            sizes_px: [20, 24]
        }, {
            name: 'north',
            version: 5,
            popularity: 1910,
            codepoint: 61920,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['arrow', 'directional', 'maps', 'navigation', 'north', 'up'],
            sizes_px: [24]
        }, {
            name: 'north_east',
            version: 5,
            popularity: 1687,
            codepoint: 61921,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['arrow', 'east', 'maps', 'navigation', 'noth', 'right', 'up'],
            sizes_px: [24]
        }, {
            name: 'north_west',
            version: 5,
            popularity: 657,
            codepoint: 61922,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['arrow', 'directional', 'left', 'maps', 'navigation', 'north', 'up', 'west'],
            sizes_px: [24]
        }, {
            name: 'not_accessible',
            version: 11,
            popularity: 334,
            codepoint: 61694,
            unsupported_families: [],
            categories: ['action'],
            tags: ['accessibility', 'accessible', 'body', 'handicap', 'help', 'human', 'not', 'person', 'wheelchair'],
            sizes_px: [20, 24]
        }, {
            name: 'not_interested',
            version: 10,
            popularity: 1196,
            codepoint: 57395,
            unsupported_families: [],
            categories: ['av'],
            tags: ['cancel', 'close', 'dislike', 'exit', 'interested', 'no', 'not', 'off', 'quit', 'remove', 'stop', 'x'],
            sizes_px: [24]
        }, {
            name: 'not_listed_location',
            version: 15,
            popularity: 757,
            codepoint: 58741,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['?', 'assistance', 'destination', 'direction', 'help', 'info', 'information', 'listed', 'location', 'maps', 'not', 'pin', 'place', 'punctuation', 'question mark', 'stop', 'support', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'not_started',
            version: 11,
            popularity: 1297,
            codepoint: 61649,
            unsupported_families: [],
            categories: ['action'],
            tags: ['circle', 'media', 'not', 'pause', 'play', 'started', 'video'],
            sizes_px: [20, 24]
        }, {
            name: 'note',
            version: 10,
            popularity: 810,
            codepoint: 57455,
            unsupported_families: [],
            categories: ['av'],
            tags: ['bookmark', 'message', 'note', 'paper'],
            sizes_px: [24]
        }, {
            name: 'note_add',
            version: 11,
            popularity: 5388,
            codepoint: 59548,
            unsupported_families: [],
            categories: ['action'],
            tags: ['+', '-doc', 'add', 'data', 'document', 'drive', 'file', 'folder', 'folders', 'new', 'note', 'page', 'paper', 'plus', 'sheet', 'slide', 'symbol', 'writing'],
            sizes_px: [24]
        }, {
            name: 'note_alt',
            version: 8,
            popularity: 1455,
            codepoint: 61504,
            unsupported_families: [],
            categories: ['device'],
            tags: ['alt', 'clipboard', 'document', 'file', 'memo', 'note', 'page', 'paper', 'writing'],
            sizes_px: [24]
        }, {
            name: 'notes',
            version: 10,
            popularity: 1795,
            codepoint: 57964,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['comment', 'doc', 'document', 'note', 'notes', 'text', 'write', 'writing'],
            sizes_px: [24]
        }, {
            name: 'notification_add',
            version: 3,
            popularity: 991,
            codepoint: 58265,
            unsupported_families: [],
            categories: ['social'],
            tags: ['+', 'active', 'add', 'alarm', 'alert', 'bell', 'chime', 'notification', 'notifications', 'notify', 'plus', 'reminder', 'ring', 'sound', 'symbol'],
            sizes_px: [20, 24]
        }, {
            name: 'notification_important',
            version: 9,
            popularity: 2339,
            codepoint: 57348,
            unsupported_families: [],
            categories: ['alert'],
            tags: ['!', 'active', 'alarm', 'alert', 'attention', 'bell', 'caution', 'chime', 'danger', 'error', 'exclamation', 'important', 'mark', 'notification', 'notifications', 'notify', 'reminder', 'ring', 'sound', 'symbol', 'warning'],
            sizes_px: [24]
        }, {
            name: 'notifications',
            version: 13,
            popularity: 20128,
            codepoint: 59380,
            unsupported_families: [],
            categories: ['social'],
            tags: ['active', 'alarm', 'alert', 'bell', 'chime', 'notifications', 'notify', 'reminder', 'ring', 'sound'],
            sizes_px: [24]
        }, {
            name: 'notifications_active',
            version: 11,
            popularity: 5357,
            codepoint: 59383,
            unsupported_families: [],
            categories: ['social'],
            tags: ['active', 'alarm', 'alert', 'bell', 'chime', 'notifications', 'notify', 'reminder', 'ring', 'ringing', 'sound'],
            sizes_px: [24]
        }, {
            name: 'notifications_none',
            version: 10,
            popularity: 3512,
            codepoint: 59381,
            unsupported_families: [],
            categories: ['social'],
            tags: ['alarm', 'alert', 'bell', 'none', 'notifications', 'notify', 'reminder', 'sound'],
            sizes_px: [24]
        }, {
            name: 'notifications_off',
            version: 10,
            popularity: 1281,
            codepoint: 59382,
            unsupported_families: [],
            categories: ['social'],
            tags: ['active', 'alarm', 'alert', 'bell', 'chime', 'disabled', 'enabled', 'notifications', 'notify', 'off', 'offline', 'on', 'reminder', 'ring', 'slash', 'sound'],
            sizes_px: [24]
        }, {
            name: 'notifications_paused',
            version: 10,
            popularity: 400,
            codepoint: 59384,
            unsupported_families: [],
            categories: ['social'],
            tags: ['active', 'alarm', 'alert', 'bell', 'chime', 'ignore', 'notifications', 'notify', 'paused', 'quiet', 'reminder', 'ring --- pause', 'sleep', 'snooze', 'sound', 'z', 'zzz'],
            sizes_px: [24]
        }, {
            name: 'offline_bolt',
            version: 13,
            popularity: 1713,
            codepoint: 59698,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bolt', 'circle', 'electric', 'fast', 'lightning', 'offline', 'thunderbolt'],
            sizes_px: [24]
        }, {
            name: 'offline_pin',
            version: 13,
            popularity: 1053,
            codepoint: 59658,
            unsupported_families: [],
            categories: ['action'],
            tags: ['approve', 'check', 'checkmark', 'circle', 'complete', 'done', 'mark', 'offline', 'ok', 'pin', 'select', 'tick', 'validate', 'verified', 'yes'],
            sizes_px: [24]
        }, {
            name: 'offline_share',
            version: 10,
            popularity: 434,
            codepoint: 59845,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['Android', 'OS', 'arrow', 'cell', 'connect', 'device', 'direction', 'hardware', 'iOS', 'link', 'mobile', 'multiple', 'offline', 'phone', 'right', 'share', 'tablet'],
            sizes_px: [24]
        }, {
            name: 'ondemand_video',
            version: 9,
            popularity: 1656,
            codepoint: 58938,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['Android', 'OS', 'chrome', 'demand', 'desktop', 'device', 'hardware', 'iOS', 'mac', 'monitor', 'ondemand', 'play', 'television', 'tv', 'video', 'web', 'window'],
            sizes_px: [24]
        }, {
            name: 'online_prediction',
            version: 10,
            popularity: 1049,
            codepoint: 61675,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bulb', 'connection', 'idea', 'light', 'network', 'online', 'prediction', 'signal', 'wireless'],
            sizes_px: [20, 24]
        }, {
            name: 'opacity',
            version: 13,
            popularity: 1476,
            codepoint: 59676,
            unsupported_families: [],
            categories: ['action'],
            tags: ['color', 'drop', 'droplet', 'hue', 'invert', 'inverted', 'opacity', 'palette', 'tone', 'water'],
            sizes_px: [24]
        }, {
            name: 'open_in_browser',
            version: 10,
            popularity: 1371,
            codepoint: 59549,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrow', 'browser', 'in', 'open', 'site', 'up', 'web', 'website', 'window'],
            sizes_px: [24]
        }, {
            name: 'open_in_full',
            version: 5,
            popularity: 4381,
            codepoint: 61902,
            unsupported_families: [],
            categories: ['action'],
            tags: ['action', 'arrow', 'arrows', 'expand', 'full', 'grow', 'in', 'move', 'open'],
            sizes_px: [24]
        }, {
            name: 'open_in_new',
            version: 15,
            popularity: 11348,
            codepoint: 59550,
            unsupported_families: [],
            categories: ['action'],
            tags: ['app', 'application', 'arrow', 'box', 'components', 'in', 'interface', 'new', 'open', 'screen', 'site', 'ui', 'ux', 'web', 'website', 'window'],
            sizes_px: [24]
        }, {
            name: 'open_in_new_off',
            version: 2,
            popularity: 397,
            codepoint: 58614,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrow', 'box', 'disabled', 'enabled', 'export', 'in', 'new', 'off', 'on', 'open', 'slash', 'window'],
            sizes_px: [20, 24]
        }, {
            name: 'open_with',
            version: 10,
            popularity: 2037,
            codepoint: 59551,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrow', 'arrows', 'direction', 'expand', 'move', 'open', 'pan', 'with'],
            sizes_px: [24]
        }, {
            name: 'other_houses',
            version: 2,
            popularity: 1349,
            codepoint: 58764,
            unsupported_families: [],
            categories: ['places'],
            tags: ['architecture', 'cottage', 'estate', 'home', 'house', 'houses', 'maps', 'other', 'place', 'real', 'residence', 'residential', 'stay', 'traveling'],
            sizes_px: [20, 24]
        }, {
            name: 'outbound',
            version: 6,
            popularity: 647,
            codepoint: 57802,
            unsupported_families: [],
            categories: ['action'],
            tags: [],
            sizes_px: [24]
        }, {
            name: 'outbox',
            version: 8,
            popularity: 752,
            codepoint: 61279,
            unsupported_families: [],
            categories: ['action'],
            tags: ['box', 'mail', 'outbox', 'send', 'sent'],
            sizes_px: [20, 24]
        }, {
            name: 'outdoor_grill',
            version: 9,
            popularity: 753,
            codepoint: 59975,
            unsupported_families: [],
            categories: ['social'],
            tags: ['barbecue', 'bbq', 'charcoal', 'cooking', 'grill', 'home', 'house', 'outdoor', 'outside'],
            sizes_px: [20, 24]
        }, {
            name: 'outlet',
            version: 5,
            popularity: 947,
            codepoint: 61908,
            unsupported_families: [],
            categories: ['action'],
            tags: ['connect', 'connecter', 'electricity', 'outlet', 'plug', 'power'],
            sizes_px: [24]
        }, {
            name: 'outlined_flag',
            version: 10,
            popularity: 1484,
            codepoint: 57710,
            unsupported_families: [],
            categories: ['content'],
            tags: ['country', 'flag', 'goal', 'mark', 'nation', 'outlined', 'report', 'start'],
            sizes_px: [24]
        }, {
            name: 'padding',
            version: 9,
            popularity: 164,
            codepoint: 59848,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['design', 'layout', 'margin', 'padding', 'size', 'square'],
            sizes_px: [24]
        }, {
            name: 'pages',
            version: 9,
            popularity: 513,
            codepoint: 59385,
            unsupported_families: [],
            categories: ['social'],
            tags: ['article', 'gplus', 'pages', 'paper', 'post', 'star'],
            sizes_px: [24]
        }, {
            name: 'pageview',
            version: 10,
            popularity: 1946,
            codepoint: 59552,
            unsupported_families: [],
            categories: ['action'],
            tags: ['doc', 'document', 'find', 'glass', 'magnifying', 'page', 'paper', 'search', 'view'],
            sizes_px: [24]
        }, {
            name: 'paid',
            version: 7,
            popularity: 11943,
            codepoint: 61505,
            unsupported_families: [],
            categories: ['action'],
            tags: ['circle', 'currency', 'money', 'paid', 'payment', 'transaction'],
            sizes_px: [24]
        }, {
            name: 'palette',
            version: 14,
            popularity: 3358,
            codepoint: 58378,
            unsupported_families: [],
            categories: ['image'],
            tags: ['art', 'color', 'colors', 'filters', 'paint', 'palette'],
            sizes_px: [20, 24]
        }, {
            name: 'pan_tool',
            version: 12,
            popularity: 4871,
            codepoint: 59685,
            unsupported_families: [],
            categories: ['action'],
            tags: ['fingers', 'gesture', 'hand', 'hands', 'human', 'move', 'pan', 'scan', 'stop', 'tool'],
            sizes_px: [24]
        }, {
            name: 'panorama',
            version: 12,
            popularity: 506,
            codepoint: 58379,
            unsupported_families: [],
            categories: ['image'],
            tags: ['angle', 'image', 'mountain', 'mountains', 'panorama', 'photo', 'photography', 'picture', 'view', 'wide'],
            sizes_px: [24]
        }, {
            name: 'panorama_fish_eye',
            version: 11,
            popularity: 950,
            codepoint: 58380,
            unsupported_families: [],
            categories: ['image'],
            tags: ['angle', 'circle', 'eye', 'fish', 'image', 'panorama', 'photo', 'photography', 'picture', 'wide'],
            sizes_px: [24]
        }, {
            name: 'panorama_horizontal',
            version: 10,
            popularity: 128,
            codepoint: 58381,
            unsupported_families: [],
            categories: ['image'],
            tags: ['angle', 'horizontal', 'image', 'panorama', 'photo', 'photography', 'picture', 'wide'],
            sizes_px: [24]
        }, {
            name: 'panorama_horizontal_select',
            version: 9,
            popularity: 123,
            codepoint: 61280,
            unsupported_families: [],
            categories: ['image'],
            tags: ['angle', 'horizontal', 'image', 'panorama', 'photo', 'photography', 'picture', 'select', 'wide'],
            sizes_px: [24]
        }, {
            name: 'panorama_photosphere',
            version: 9,
            popularity: 159,
            codepoint: 59849,
            unsupported_families: [],
            categories: ['image'],
            tags: ['angle', 'horizontal', 'image', 'panorama', 'photo', 'photography', 'photosphere', 'picture', 'wide'],
            sizes_px: [24]
        }, {
            name: 'panorama_photosphere_select',
            version: 10,
            popularity: 124,
            codepoint: 59850,
            unsupported_families: [],
            categories: ['image'],
            tags: ['angle', 'horizontal', 'image', 'panorama', 'photo', 'photography', 'photosphere', 'picture', 'select', 'wide'],
            sizes_px: [24]
        }, {
            name: 'panorama_vertical',
            version: 11,
            popularity: 102,
            codepoint: 58382,
            unsupported_families: [],
            categories: ['image'],
            tags: ['angle', 'image', 'panorama', 'photo', 'photography', 'picture', 'vertical', 'wide'],
            sizes_px: [24]
        }, {
            name: 'panorama_vertical_select',
            version: 10,
            popularity: 111,
            codepoint: 61281,
            unsupported_families: [],
            categories: ['image'],
            tags: ['angle', 'image', 'panorama', 'photo', 'photography', 'picture', 'select', 'vertical', 'wide'],
            sizes_px: [24]
        }, {
            name: 'panorama_wide_angle',
            version: 12,
            popularity: 115,
            codepoint: 58383,
            unsupported_families: [],
            categories: ['image'],
            tags: ['angle', 'image', 'panorama', 'photo', 'photography', 'picture', 'wide'],
            sizes_px: [24]
        }, {
            name: 'panorama_wide_angle_select',
            version: 10,
            popularity: 155,
            codepoint: 61282,
            unsupported_families: [],
            categories: ['image'],
            tags: ['angle', 'image', 'panorama', 'photo', 'photography', 'picture', 'select', 'wide'],
            sizes_px: [24]
        }, {
            name: 'paragliding',
            version: 2,
            popularity: 404,
            codepoint: 58639,
            unsupported_families: [],
            categories: ['social'],
            tags: ['athlete', 'athletic', 'body', 'entertainment', 'exercise', 'fly', 'gliding', 'hobby', 'human', 'parachute', 'paragliding', 'people', 'person', 'sky', 'skydiving', 'social', 'sports', 'travel'],
            sizes_px: [20, 24]
        }, {
            name: 'park',
            version: 8,
            popularity: 2207,
            codepoint: 60003,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['attraction', 'fresh', 'local', 'nature', 'outside', 'park', 'plant', 'tree'],
            sizes_px: [20, 24]
        }, {
            name: 'party_mode',
            version: 10,
            popularity: 382,
            codepoint: 59386,
            unsupported_families: [],
            categories: ['social'],
            tags: ['camera', 'lens', 'mode', 'party', 'photo', 'photography', 'picture'],
            sizes_px: [24]
        }, {
            name: 'password',
            version: 8,
            popularity: 4448,
            codepoint: 61506,
            unsupported_families: [],
            categories: ['device'],
            tags: ['key', 'login', 'password', 'pin', 'security', 'star', 'unlock'],
            sizes_px: [24]
        }, {
            name: 'pattern',
            version: 9,
            popularity: 415,
            codepoint: 61507,
            unsupported_families: [],
            categories: ['device'],
            tags: ['key', 'login', 'password', 'pattern', 'pin', 'security', 'star', 'unlock'],
            sizes_px: [24]
        }, {
            name: 'pause',
            version: 11,
            popularity: 5622,
            codepoint: 57396,
            unsupported_families: [],
            categories: ['av'],
            tags: ['control', 'controls', 'media', 'music', 'pause', 'player', 'video'],
            sizes_px: [24]
        }, {
            name: 'pause_circle',
            version: 8,
            popularity: 1653,
            codepoint: 57762,
            unsupported_families: [],
            categories: ['av'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'pause_circle_filled',
            version: 13,
            popularity: 1036,
            codepoint: 57397,
            unsupported_families: [],
            categories: ['av'],
            tags: ['circle', 'control', 'controls', 'filled', 'media', 'music', 'pause', 'video'],
            sizes_px: [24]
        }, {
            name: 'pause_circle_outline',
            version: 14,
            popularity: 874,
            codepoint: 57398,
            unsupported_families: [],
            categories: ['av'],
            tags: ['circle', 'control', 'controls', 'media', 'music', 'outline', 'pause', 'video'],
            sizes_px: [24]
        }, {
            name: 'pause_presentation',
            version: 10,
            popularity: 283,
            codepoint: 57578,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['app', 'application desktop', 'device', 'pause', 'present', 'presentation', 'screen', 'share', 'site', 'slides', 'web', 'website', 'window', 'www'],
            sizes_px: [24]
        }, {
            name: 'payment',
            version: 10,
            popularity: 4986,
            codepoint: 59553,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bill', 'card', 'cash', 'coin', 'commerce', 'cost', 'credit', 'currency', 'dollars', 'finance', 'money', 'online', 'pay', 'payment', 'price', 'shopping', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'payments',
            version: 10,
            popularity: 6406,
            codepoint: 61283,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['bill', 'card', 'cash', 'coin', 'commerce', 'cost', 'credit', 'currency', 'dollars', 'finance', 'layer', 'money', 'multiple', 'online', 'pay', 'payment', 'payments', 'price', 'shopping', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'pedal_bike',
            version: 12,
            popularity: 1138,
            codepoint: 60201,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['automobile', 'bicycle', 'bike', 'car', 'cars', 'maps', 'pedal', 'public', 'transportation', 'vehicle'],
            sizes_px: [20, 24]
        }, {
            name: 'pending',
            version: 12,
            popularity: 4313,
            codepoint: 61284,
            unsupported_families: [],
            categories: ['action'],
            tags: ['circle', 'dots', 'loading', 'pending', 'progress', 'wait', 'waiting'],
            sizes_px: [20, 24]
        }, {
            name: 'pending_actions',
            version: 5,
            popularity: 4624,
            codepoint: 61883,
            unsupported_families: [],
            categories: ['action'],
            tags: ['actions', 'clipboard', 'clock', 'date', 'doc', 'document', 'pending', 'remember', 'schedule', 'time'],
            sizes_px: [24]
        }, {
            name: 'people',
            version: 18,
            popularity: 13619,
            codepoint: 59387,
            unsupported_families: [],
            categories: ['social'],
            tags: ['accounts', 'committee', 'community', 'face', 'family', 'friends', 'group', 'humans', 'network', 'people', 'persons', 'profiles', 'social', 'team', 'users'],
            sizes_px: [24]
        }, {
            name: 'people_alt',
            version: 16,
            popularity: 4366,
            codepoint: 59937,
            unsupported_families: [],
            categories: ['social'],
            tags: ['accounts', 'committee', 'face', 'family', 'friends', 'humans', 'network', 'people', 'persons', 'profiles', 'social', 'team', 'users'],
            sizes_px: [20, 24]
        }, {
            name: 'people_outline',
            version: 10,
            popularity: 1694,
            codepoint: 59388,
            unsupported_families: [],
            categories: ['social'],
            tags: ['accounts', 'committee', 'face', 'family', 'friends', 'humans', 'network', 'outline', 'people', 'persons', 'profiles', 'social', 'team', 'users'],
            sizes_px: [24]
        }, {
            name: 'perm_camera_mic',
            version: 10,
            popularity: 336,
            codepoint: 59554,
            unsupported_families: [],
            categories: ['action'],
            tags: ['camera', 'image', 'microphone', 'min', 'perm', 'photo', 'photography', 'picture', 'speaker'],
            sizes_px: [24]
        }, {
            name: 'perm_contact_calendar',
            version: 11,
            popularity: 1852,
            codepoint: 59555,
            unsupported_families: [],
            categories: ['action'],
            tags: ['account', 'calendar', 'contact', 'date', 'face', 'human', 'information', 'people', 'perm', 'person', 'profile', 'schedule', 'time', 'user'],
            sizes_px: [24]
        }, {
            name: 'perm_data_setting',
            version: 10,
            popularity: 565,
            codepoint: 59556,
            unsupported_families: [],
            categories: ['action'],
            tags: ['data', 'gear', 'info', 'information', 'perm', 'settings'],
            sizes_px: [24]
        }, {
            name: 'perm_device_information',
            version: 11,
            popularity: 470,
            codepoint: 59557,
            unsupported_families: [],
            categories: ['action'],
            tags: ['Android', 'OS', 'alert', 'announcement', 'device', 'hardware', 'i', 'iOS', 'info', 'information', 'mobile', 'perm', 'phone', 'tablet'],
            sizes_px: [24]
        }, {
            name: 'perm_identity',
            version: 10,
            popularity: 10390,
            codepoint: 59558,
            unsupported_families: [],
            categories: ['action'],
            tags: ['account', 'avatar', 'face', 'human', 'identity', 'people', 'perm', 'person', 'profile', 'thumbnail', 'user'],
            sizes_px: [24]
        }, {
            name: 'perm_media',
            version: 13,
            popularity: 2164,
            codepoint: 59559,
            unsupported_families: [],
            categories: ['action'],
            tags: ['collection', 'data', 'doc', 'document', 'file', 'folder', 'folders', 'image', 'landscape', 'media', 'mountain', 'mountains', 'perm', 'photo', 'photography', 'picture', 'storage'],
            sizes_px: [24]
        }, {
            name: 'perm_phone_msg',
            version: 10,
            popularity: 1981,
            codepoint: 59560,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bubble', 'call', 'cell', 'chat', 'comment', 'communicate', 'contact', 'device', 'message', 'msg', 'perm', 'phone', 'recording', 'speech', 'telephone', 'voice'],
            sizes_px: [24]
        }, {
            name: 'perm_scan_wifi',
            version: 10,
            popularity: 600,
            codepoint: 59561,
            unsupported_families: [],
            categories: ['action'],
            tags: ['alert', 'announcement', 'connection', 'info', 'information', 'internet', 'network', 'perm', 'scan', 'service', 'signal', 'wifi', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'person',
            version: 12,
            popularity: 35228,
            codepoint: 59389,
            unsupported_families: [],
            categories: ['social'],
            tags: ['account', 'face', 'human', 'people', 'person', 'profile', 'user'],
            sizes_px: [24]
        }, {
            name: 'person_add',
            version: 11,
            popularity: 9604,
            codepoint: 59390,
            unsupported_families: [],
            categories: ['social'],
            tags: ['+', 'account', 'add', 'avatar', 'face', 'friend', 'human', 'new', 'people', 'person', 'plus', 'profile', 'symbol', 'user'],
            sizes_px: [24]
        }, {
            name: 'person_add_alt',
            version: 9,
            popularity: 2872,
            codepoint: 59981,
            unsupported_families: [],
            categories: ['social'],
            tags: ['+', 'account', 'add', 'face', 'human', 'people', 'person', 'plus', 'profile', 'user'],
            sizes_px: [20, 24]
        }, {
            name: 'person_add_alt_1',
            version: 11,
            popularity: 1500,
            codepoint: 61285,
            unsupported_families: [],
            categories: ['social'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'person_add_disabled',
            version: 9,
            popularity: 312,
            codepoint: 59851,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['+', 'account', 'add', 'disabled', 'enabled', 'face', 'human', 'new', 'off', 'offline', 'on', 'people', 'person', 'plus', 'profile', 'slash', 'symbol', 'user'],
            sizes_px: [24]
        }, {
            name: 'person_off',
            version: 2,
            popularity: 1473,
            codepoint: 58640,
            unsupported_families: [],
            categories: ['social'],
            tags: ['account', 'avatar', 'disabled', 'enabled', 'face', 'human', 'off', 'on', 'people', 'person', 'profile', 'slash', 'user'],
            sizes_px: [20, 24]
        }, {
            name: 'person_outline',
            version: 14,
            popularity: 10708,
            codepoint: 59391,
            unsupported_families: [],
            categories: ['social'],
            tags: ['account', 'face', 'human', 'outline', 'people', 'person', 'profile', 'user'],
            sizes_px: [24]
        }, {
            name: 'person_pin',
            version: 11,
            popularity: 1776,
            codepoint: 58714,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['account', 'avatar', 'destination', 'direction', 'face', 'human', 'location', 'maps', 'people', 'person', 'pin', 'place', 'profile', 'stop', 'user'],
            sizes_px: [24]
        }, {
            name: 'person_pin_circle',
            version: 15,
            popularity: 1472,
            codepoint: 58730,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['account', 'circle', 'destination', 'direction', 'face', 'human', 'location', 'maps', 'people', 'person', 'pin', 'place', 'profile', 'stop', 'user'],
            sizes_px: [24]
        }, {
            name: 'person_remove',
            version: 10,
            popularity: 1940,
            codepoint: 61286,
            unsupported_families: [],
            categories: ['social'],
            tags: ['account', 'avatar', 'delete', 'face', 'human', 'minus', 'people', 'person', 'profile', 'remove', 'unfriend', 'user'],
            sizes_px: [20, 24]
        }, {
            name: 'person_remove_alt_1',
            version: 11,
            popularity: 443,
            codepoint: 61287,
            unsupported_families: [],
            categories: ['social'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'person_search',
            version: 10,
            popularity: 2945,
            codepoint: 61702,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['account', 'avatar', 'face', 'find', 'glass', 'human', 'look', 'magnify', 'magnifying', 'people', 'person', 'profile', 'search', 'user'],
            sizes_px: [20, 24]
        }, {
            name: 'personal_injury',
            version: 1,
            popularity: 435,
            codepoint: 59098,
            unsupported_families: [],
            categories: ['social'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'personal_video',
            version: 11,
            popularity: 449,
            codepoint: 58939,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['Android', 'OS', 'cam', 'chrome', 'desktop', 'device', 'hardware', 'iOS', 'mac', 'monitor', 'personal', 'television', 'tv', 'video', 'web', 'window'],
            sizes_px: [24]
        }, {
            name: 'pest_control',
            version: 10,
            popularity: 484,
            codepoint: 61690,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['bug', 'control', 'exterminator', 'insects', 'pest'],
            sizes_px: [20, 24]
        }, {
            name: 'pest_control_rodent',
            version: 10,
            popularity: 220,
            codepoint: 61693,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['control', 'exterminator', 'mice', 'pest', 'rodent'],
            sizes_px: [20, 24]
        }, {
            name: 'pets',
            version: 10,
            popularity: 8805,
            codepoint: 59677,
            unsupported_families: [],
            categories: ['action'],
            tags: ['animal', 'cat', 'dog', 'hand', 'paw', 'pet'],
            sizes_px: [24]
        }, {
            name: 'phone',
            version: 10,
            popularity: 12095,
            codepoint: 57549,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['call', 'cell', 'contact', 'device', 'hardware', 'mobile', 'phone', 'telephone'],
            sizes_px: [24]
        }, {
            name: 'phone_android',
            version: 10,
            popularity: 2609,
            codepoint: 58148,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['OS', 'android', 'cell', 'device', 'hardware', 'iOS', 'mobile', 'phone', 'tablet'],
            sizes_px: [24]
        }, {
            name: 'phone_bluetooth_speaker',
            version: 10,
            popularity: 150,
            codepoint: 58907,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['bluetooth', 'call', 'cell', 'connect', 'connection', 'connectivity', 'contact', 'device', 'hardware', 'mobile', 'phone', 'signal', 'speaker', 'symbol', 'telephone', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'phone_callback',
            version: 11,
            popularity: 519,
            codepoint: 58953,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['arrow', 'call', 'callback', 'cell', 'contact', 'device', 'down', 'hardware', 'mobile', 'phone', 'telephone'],
            sizes_px: [24]
        }, {
            name: 'phone_disabled',
            version: 10,
            popularity: 495,
            codepoint: 59852,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['call', 'cell', 'contact', 'device', 'disabled', 'enabled', 'hardware', 'mobile', 'off', 'offline', 'on', 'phone', 'slash', 'telephone'],
            sizes_px: [24]
        }, {
            name: 'phone_enabled',
            version: 11,
            popularity: 1047,
            codepoint: 59853,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['call', 'cell', 'contact', 'device', 'enabled', 'hardware', 'mobile', 'phone', 'telephone'],
            sizes_px: [24]
        }, {
            name: 'phone_forwarded',
            version: 11,
            popularity: 443,
            codepoint: 58908,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['arrow', 'call', 'cell', 'contact', 'device', 'direction', 'forwarded', 'hardware', 'mobile', 'phone', 'right', 'telephone'],
            sizes_px: [24]
        }, {
            name: 'phone_in_talk',
            version: 10,
            popularity: 3703,
            codepoint: 58909,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['call', 'cell', 'connection', 'contact', 'data', 'device', 'hardware', 'in', 'mobile', 'network', 'phone', 'scan', 'service', 'signal', 'sound', 'speaker', 'talk', 'telephone', 'waves', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'phone_iphone',
            version: 10,
            popularity: 6814,
            codepoint: 58149,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['Android', 'OS', 'cell', 'device', 'hardware', 'iOS', 'iphone', 'mobile', 'phone', 'tablet'],
            sizes_px: [24]
        }, {
            name: 'phone_locked',
            version: 15,
            popularity: 173,
            codepoint: 58910,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['call', 'cell', 'contact', 'device', 'hardware', 'lock', 'locked', 'mobile', 'password', 'phone', 'privacy', 'private', 'protection', 'safety', 'secure', 'security', 'telephone'],
            sizes_px: [24]
        }, {
            name: 'phone_missed',
            version: 11,
            popularity: 310,
            codepoint: 58911,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['arrow', 'call', 'cell', 'contact', 'device', 'hardware', 'missed', 'mobile', 'phone', 'telephone'],
            sizes_px: [24]
        }, {
            name: 'phone_paused',
            version: 11,
            popularity: 180,
            codepoint: 58912,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['call', 'cell', 'contact', 'device', 'hardware', 'mobile', 'pause', 'paused', 'phone', 'telephone'],
            sizes_px: [24]
        }, {
            name: 'phonelink',
            version: 10,
            popularity: 588,
            codepoint: 58150,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['Android', 'OS', 'chrome', 'computer', 'connect', 'desktop', 'device', 'hardware', 'iOS', 'link', 'mac', 'mobile', 'phone', 'phonelink', 'sync', 'tablet', 'web', 'windows'],
            sizes_px: [24]
        }, {
            name: 'phonelink_erase',
            version: 10,
            popularity: 313,
            codepoint: 57563,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['Android', 'OS', 'cancel', 'cell', 'close', 'connection', 'device', 'erase', 'exit', 'hardware', 'iOS', 'mobile', 'no', 'phone', 'phonelink', 'remove', 'stop', 'tablet', 'x'],
            sizes_px: [24]
        }, {
            name: 'phonelink_lock',
            version: 13,
            popularity: 556,
            codepoint: 57564,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['Android', 'OS', 'cell', 'connection', 'device', 'erase', 'hardware', 'iOS', 'lock', 'locked', 'mobile', 'password', 'phone', 'phonelink', 'privacy', 'private', 'protection', 'safety', 'secure', 'security', 'tablet'],
            sizes_px: [24]
        }, {
            name: 'phonelink_off',
            version: 10,
            popularity: 166,
            codepoint: 58151,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['Android', 'OS', 'chrome', 'computer', 'connect', 'desktop', 'device', 'disabled', 'enabled', 'hardware', 'iOS', 'link', 'mac', 'mobile', 'off', 'on', 'phone', 'phonelink', 'slash', 'sync', 'tablet', 'web', 'windows'],
            sizes_px: [24]
        }, {
            name: 'phonelink_ring',
            version: 10,
            popularity: 634,
            codepoint: 57565,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['Android', 'OS', 'cell', 'connection', 'data', 'device', 'hardware', 'iOS', 'mobile', 'network', 'phone', 'phonelink', 'ring', 'service', 'signal', 'tablet', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'phonelink_setup',
            version: 11,
            popularity: 497,
            codepoint: 57566,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['Android', 'OS', 'call', 'chat', 'device', 'hardware', 'iOS', 'info', 'mobile', 'phone', 'phonelink', 'settings', 'setup', 'tablet', 'text'],
            sizes_px: [24]
        }, {
            name: 'photo',
            version: 10,
            popularity: 699,
            codepoint: 58384,
            unsupported_families: [],
            categories: ['image'],
            tags: ['image', 'mountain', 'mountains', 'photo', 'photography', 'picture'],
            sizes_px: [24]
        }, {
            name: 'photo_album',
            version: 11,
            popularity: 343,
            codepoint: 58385,
            unsupported_families: [],
            categories: ['image'],
            tags: ['album', 'archive', 'bookmark', 'image', 'label', 'library', 'mountain', 'mountains', 'photo', 'photography', 'picture', 'ribbon', 'save', 'tag'],
            sizes_px: [24]
        }, {
            name: 'photo_camera',
            version: 13,
            popularity: 10650,
            codepoint: 58386,
            unsupported_families: [],
            categories: ['image'],
            tags: ['camera', 'image', 'photo', 'photography', 'picture'],
            sizes_px: [24]
        }, {
            name: 'photo_camera_back',
            version: 9,
            popularity: 216,
            codepoint: 61288,
            unsupported_families: [],
            categories: ['image'],
            tags: ['back', 'camera', 'image', 'landscape', 'mountain', 'mountains', 'photo', 'photography', 'picture', 'rear'],
            sizes_px: [24]
        }, {
            name: 'photo_camera_front',
            version: 9,
            popularity: 409,
            codepoint: 61289,
            unsupported_families: [],
            categories: ['image'],
            tags: ['account', 'camera', 'face', 'front', 'human', 'image', 'people', 'person', 'photo', 'photography', 'picture', 'portrait', 'profile', 'user'],
            sizes_px: [24]
        }, {
            name: 'photo_filter',
            version: 10,
            popularity: 293,
            codepoint: 58427,
            unsupported_families: [],
            categories: ['image'],
            tags: ['filter', 'filters', 'image', 'photo', 'photography', 'picture', 'star', 'stars'],
            sizes_px: [24]
        }, {
            name: 'photo_library',
            version: 10,
            popularity: 1377,
            codepoint: 58387,
            unsupported_families: [],
            categories: ['image'],
            tags: ['album', 'image', 'library', 'mountain', 'mountains', 'photo', 'photography', 'picture'],
            sizes_px: [24]
        }, {
            name: 'photo_size_select_actual',
            version: 10,
            popularity: 441,
            codepoint: 58418,
            unsupported_families: [],
            categories: ['image'],
            tags: ['actual', 'image', 'mountain', 'mountains', 'photo', 'photography', 'picture', 'select', 'size'],
            sizes_px: [24]
        }, {
            name: 'photo_size_select_large',
            version: 10,
            popularity: 249,
            codepoint: 58419,
            unsupported_families: [],
            categories: ['image'],
            tags: ['adjust', 'album', 'edit', 'editing', 'image', 'large', 'library', 'mountain', 'mountains', 'photo', 'photography', 'picture', 'select', 'size'],
            sizes_px: [24]
        }, {
            name: 'photo_size_select_small',
            version: 10,
            popularity: 253,
            codepoint: 58420,
            unsupported_families: [],
            categories: ['image'],
            tags: ['adjust', 'album', 'edit', 'editing', 'image', 'large', 'library', 'mountain', 'mountains', 'photo', 'photography', 'picture', 'select', 'size', 'small'],
            sizes_px: [24]
        }, {
            name: 'piano',
            version: 2,
            popularity: 544,
            codepoint: 58657,
            unsupported_families: [],
            categories: ['social'],
            tags: ['instrument', 'keyboard', 'keys', 'music', 'musical', 'piano', 'social'],
            sizes_px: [20, 24]
        }, {
            name: 'piano_off',
            version: 2,
            popularity: 221,
            codepoint: 58656,
            unsupported_families: [],
            categories: ['social'],
            tags: ['disabled', 'enabled', 'instrument', 'keyboard', 'keys', 'music', 'musical', 'off', 'on', 'piano', 'slash', 'social'],
            sizes_px: [20, 24]
        }, {
            name: 'picture_as_pdf',
            version: 10,
            popularity: 6053,
            codepoint: 58389,
            unsupported_families: [],
            categories: ['image'],
            tags: ['alphabet', 'as', 'character', 'document', 'file', 'font', 'image', 'letter', 'multiple', 'pdf', 'photo', 'photography', 'picture',
                'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'picture_in_picture',
            version: 10,
            popularity: 603,
            codepoint: 59562,
            unsupported_families: [],
            categories: ['action'],
            tags: ['crop', 'cropped', 'overlap', 'photo', 'picture', 'position', 'shape'],
            sizes_px: [24]
        }, {
            name: 'picture_in_picture_alt',
            version: 10,
            popularity: 449,
            codepoint: 59665,
            unsupported_families: [],
            categories: ['action'],
            tags: ['crop', 'cropped', 'overlap', 'photo', 'picture', 'position', 'shape'],
            sizes_px: [24]
        }, {
            name: 'pie_chart',
            version: 9,
            popularity: 1732,
            codepoint: 59076,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['analytics', 'bar', 'bars', 'chart', 'data', 'diagram', 'graph', 'infographic', 'measure', 'metrics', 'pie', 'statistics', 'tracking'],
            sizes_px: [24]
        }, {
            name: 'pie_chart_outline',
            version: 8,
            popularity: 435,
            codepoint: 61508,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['analytics', 'bar', 'bars', 'chart', 'data', 'diagram', 'graph', 'infographic', 'measure', 'metrics', 'outline', 'pie', 'statistics', 'tracking'],
            sizes_px: [24]
        }, {
            name: 'pin',
            version: 8,
            popularity: 1903,
            codepoint: 61509,
            unsupported_families: [],
            categories: ['device'],
            tags: ['1', '2', '3', 'digit', 'key', 'login', 'logout', 'number', 'password', 'pattern', 'pin', 'security', 'star', 'symbol', 'unlock'],
            sizes_px: [24]
        }, {
            name: 'pin_drop',
            version: 15,
            popularity: 2064,
            codepoint: 58718,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['destination', 'direction', 'drop', 'location', 'maps', 'navigation', 'pin', 'place', 'stop'],
            sizes_px: [24]
        }, {
            name: 'pin_end',
            version: 1,
            popularity: 306,
            codepoint: 59239,
            unsupported_families: [],
            categories: ['action'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'pin_invoke',
            version: 1,
            popularity: 330,
            codepoint: 59235,
            unsupported_families: [],
            categories: ['action'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'pivot_table_chart',
            version: 9,
            popularity: 523,
            codepoint: 59854,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['analytics', 'arrow', 'arrows', 'bar', 'bars', 'chart', 'data', 'diagram', 'direction', 'drive', 'edit', 'editing',
                'graph', 'grid', 'infographic', 'measure', 'metrics', 'pivot', 'rotate', 'sheet', 'statistics', 'table', 'tracking'],
            sizes_px: [24]
        }, {
            name: 'place',
            version: 15,
            popularity: 15387,
            codepoint: 58719,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['destination', 'direction', 'location', 'maps', 'navigation', 'pin', 'place', 'point', 'stop'],
            sizes_px: [24]
        }, {
            name: 'plagiarism',
            version: 9,
            popularity: 1033,
            codepoint: 59994,
            unsupported_families: [],
            categories: ['action'],
            tags: ['doc', 'document', 'find', 'glass', 'look', 'magnifying', 'page', 'paper', 'plagiarism', 'search', 'see'],
            sizes_px: [20, 24]
        }, {
            name: 'play_arrow',
            version: 11,
            popularity: 15836,
            codepoint: 57399,
            unsupported_families: [],
            categories: ['av'],
            tags: ['arrow', 'control', 'controls', 'media', 'music', 'play', 'player', 'start', 'video'],
            sizes_px: [24]
        }, {
            name: 'play_circle',
            version: 7,
            popularity: 6878,
            codepoint: 57796,
            unsupported_families: [],
            categories: ['av'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'play_circle_filled',
            version: 12,
            popularity: 8998,
            codepoint: 57400,
            unsupported_families: [],
            categories: ['av'],
            tags: ['arrow', 'circle', 'control', 'controls', 'media', 'music', 'play', 'video'],
            sizes_px: [24]
        }, {
            name: 'play_circle_outline',
            version: 14,
            popularity: 5188,
            codepoint: 57401,
            unsupported_families: [],
            categories: ['av'],
            tags: ['arrow', 'circle', 'control', 'controls', 'media', 'music', 'outline', 'play', 'video'],
            sizes_px: [24]
        }, {
            name: 'play_disabled',
            version: 8,
            popularity: 193,
            codepoint: 61290,
            unsupported_families: [],
            categories: ['av'],
            tags: ['control', 'controls', 'disabled', 'enabled', 'media', 'music', 'off', 'on', 'play', 'slash', 'video'],
            sizes_px: [24]
        }, {
            name: 'play_for_work',
            version: 10,
            popularity: 800,
            codepoint: 59654,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrow', 'circle', 'down', 'google', 'half', 'play', 'work'],
            sizes_px: [24]
        }, {
            name: 'play_lesson',
            version: 8,
            popularity: 398,
            codepoint: 61511,
            unsupported_families: [],
            categories: ['device'],
            tags: ['audio', 'book', 'bookmark', 'digital', 'ebook', 'lesson', 'multimedia', 'play', 'play lesson', 'read', 'reading', 'ribbon'],
            sizes_px: [24]
        }, {
            name: 'playlist_add',
            version: 14,
            popularity: 2217,
            codepoint: 57403,
            unsupported_families: [],
            categories: ['av'],
            tags: ['+', 'add', 'collection', 'list', 'music', 'new', 'playlist', 'plus', 'symbol'],
            sizes_px: [20, 24]
        }, {
            name: 'playlist_add_check',
            version: 15,
            popularity: 1695,
            codepoint: 57445,
            unsupported_families: [],
            categories: ['av'],
            tags: ['add', 'approve', 'check', 'collection', 'complete', 'done', 'list', 'mark', 'music', 'ok', 'playlist', 'select', 'tick', 'validate', 'verified', 'yes'],
            sizes_px: [20, 24]
        }, {
            name: 'playlist_play',
            version: 12,
            popularity: 748,
            codepoint: 57439,
            unsupported_families: [],
            categories: ['av'],
            tags: ['arow', 'collection', 'list', 'music', 'play', 'playlist'],
            sizes_px: [20, 24]
        }, {
            name: 'plumbing',
            version: 10,
            popularity: 513,
            codepoint: 61703,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['build', 'construction', 'fix', 'handyman', 'plumbing', 'repair', 'tools', 'wrench'],
            sizes_px: [20, 24]
        }, {
            name: 'plus_one',
            version: 12,
            popularity: 713,
            codepoint: 59392,
            unsupported_families: [],
            categories: ['social'],
            tags: ['1', 'add', 'digit', 'increase', 'number', 'one', 'plus', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'podcasts',
            version: 7,
            popularity: 1487,
            codepoint: 61512,
            unsupported_families: [],
            categories: ['search'],
            tags: ['broadcast', 'casting', 'network', 'podcasts', 'signal', 'transmitting', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'point_of_sale',
            version: 6,
            popularity: 1689,
            codepoint: 61822,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['checkout', 'cost', 'machine', 'merchant', 'money', 'of', 'pay', 'payment', 'point', 'pos', 'retail', 'sale', 'system', 'transaction'],
            sizes_px: [20, 24]
        }, {
            name: 'policy',
            version: 10,
            popularity: 2237,
            codepoint: 59927,
            unsupported_families: [],
            categories: ['content'],
            tags: ['certified', 'find', 'glass', 'legal', 'look', 'magnify', 'magnifying', 'policy', 'privacy', 'private', 'protect', 'protection', 'search', 'security', 'see', 'shield', 'verified'],
            sizes_px: [20, 24]
        }, {
            name: 'poll',
            version: 11,
            popularity: 1938,
            codepoint: 59393,
            unsupported_families: [],
            categories: ['social'],
            tags: ['analytics', 'bar', 'bars', 'chart', 'data', 'diagram', 'graph', 'infographic', 'measure', 'metrics', 'poll', 'statistics', 'survey', 'tracking', 'vote'],
            sizes_px: [24]
        }, {
            name: 'polymer',
            version: 10,
            popularity: 724,
            codepoint: 59563,
            unsupported_families: [],
            categories: ['action'],
            tags: ['emblem', 'logo', 'mark', 'polymer'],
            sizes_px: [24]
        }, {
            name: 'pool',
            version: 10,
            popularity: 1102,
            codepoint: 60232,
            unsupported_families: [],
            categories: ['places'],
            tags: ['athlete', 'athletic', 'beach', 'body', 'entertainment', 'exercise', 'hobby', 'human', 'ocean', 'people', 'person', 'places', 'pool', 'sea', 'sports', 'swim', 'swimming', 'water'],
            sizes_px: [24]
        }, {
            name: 'portable_wifi_off',
            version: 10,
            popularity: 286,
            codepoint: 57550,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['connection', 'data', 'disabled', 'enabled', 'internet', 'network', 'off', 'offline', 'on', 'portable', 'service', 'signal', 'slash', 'wifi', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'portrait',
            version: 10,
            popularity: 1350,
            codepoint: 58390,
            unsupported_families: [],
            categories: ['image'],
            tags: ['account', 'face', 'human', 'people', 'person', 'photo', 'picture', 'portrait', 'profile', 'user'],
            sizes_px: [24]
        }, {
            name: 'post_add',
            version: 9,
            popularity: 3854,
            codepoint: 59936,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['+', 'add', 'data', 'doc', 'document', 'drive', 'file', 'folder', 'folders', 'page', 'paper', 'plus', 'post', 'sheet', 'slide', 'text',
                'writing'],
            sizes_px: [20, 24]
        }, {
            name: 'power',
            version: 10,
            popularity: 962,
            codepoint: 58940,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['charge', 'cord', 'electric', 'electrical', 'outlet', 'plug', 'power'],
            sizes_px: [24]
        }, {
            name: 'power_input',
            version: 10,
            popularity: 172,
            codepoint: 58166,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['input', 'lines', 'power', 'supply'],
            sizes_px: [24]
        }, {
            name: 'power_off',
            version: 10,
            popularity: 502,
            codepoint: 58950,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['charge', 'cord', 'disabled', 'electric', 'electrical', 'enabled', 'off', 'on', 'outlet', 'plug', 'power', 'slash'],
            sizes_px: [24]
        }, {
            name: 'power_settings_new',
            version: 10,
            popularity: 6339,
            codepoint: 59564,
            unsupported_families: [],
            categories: ['action'],
            tags: ['info', 'information', 'off', 'on', 'power', 'save', 'settings', 'shutdown'],
            sizes_px: [24]
        }, {
            name: 'precision_manufacturing',
            version: 8,
            popularity: 3254,
            codepoint: 61513,
            unsupported_families: [],
            categories: ['social'],
            tags: ['arm', 'automatic', 'chain', 'conveyor', 'crane', 'factory', 'industry', 'machinery', 'manufacturing', 'mechanical', 'precision', 'production', 'repairing', 'robot', 'supply', 'warehouse'],
            sizes_px: [20, 24]
        }, {
            name: 'pregnant_woman',
            version: 12,
            popularity: 1126,
            codepoint: 59678,
            unsupported_families: [],
            categories: ['action'],
            tags: ['baby', 'birth', 'body', 'female', 'human', 'lady', 'maternity', 'mom', 'mother', 'people', 'person', 'pregnant', 'women'],
            sizes_px: [24]
        }, {
            name: 'present_to_all',
            version: 9,
            popularity: 758,
            codepoint: 57567,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['all', 'arrow', 'present', 'presentation', 'screen', 'share', 'site', 'slides', 'to', 'web', 'website'],
            sizes_px: [24]
        }, {
            name: 'preview',
            version: 5,
            popularity: 4202,
            codepoint: 61893,
            unsupported_families: [],
            categories: ['action'],
            tags: ['design', 'eye', 'layout', 'preview', 'reveal', 'screen', 'see', 'show', 'site', 'view', 'web', 'website', 'window', 'www'],
            sizes_px: [24]
        }, {
            name: 'price_change',
            version: 8,
            popularity: 1676,
            codepoint: 61514,
            unsupported_families: [],
            categories: ['device'],
            tags: ['arrows', 'bill', 'card', 'cash', 'change', 'coin', 'commerce', 'cost', 'credit', 'currency', 'dollars', 'down', 'finance',
                'money', 'online', 'pay', 'payment', 'price', 'shopping', 'symbol', 'up'],
            sizes_px: [24]
        }, {
            name: 'price_check',
            version: 8,
            popularity: 2090,
            codepoint: 61515,
            unsupported_families: [],
            categories: ['device'],
            tags: ['approve', 'bill', 'card', 'cash', 'check', 'coin', 'commerce', 'complete', 'cost', 'credit', 'currency', 'dollars', 'done',
                'finance', 'mark', 'money', 'ok', 'online', 'pay', 'payment', 'price', 'select', 'shopping', 'symbol', 'tick', 'validate', 'verified', 'yes'],
            sizes_px: [24]
        }, {
            name: 'print',
            version: 11,
            popularity: 7457,
            codepoint: 59565,
            unsupported_families: [],
            categories: ['action'],
            tags: ['draft', 'fax', 'ink', 'machine', 'office', 'paper', 'print', 'printer', 'send'],
            sizes_px: [24]
        }, {
            name: 'print_disabled',
            version: 10,
            popularity: 245,
            codepoint: 59855,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['disabled', 'enabled', 'off', 'on', 'paper', 'print', 'printer', 'slash'],
            sizes_px: [24]
        }, {
            name: 'priority_high',
            version: 14,
            popularity: 3854,
            codepoint: 58949,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['!', 'alert', 'attention', 'caution', 'danger', 'error', 'exclamation', 'high', 'important', 'mark', 'notification', 'priority', 'symbol', 'warning'],
            sizes_px: [24]
        }, {
            name: 'privacy_tip',
            version: 10,
            popularity: 2749,
            codepoint: 61660,
            unsupported_families: [],
            categories: ['action'],
            tags: ['alert', 'announcment', 'assistance', 'certified', 'details', 'help', 'i', 'info', 'information', 'privacy', 'private', 'protect', 'protection', 'security', 'service', 'shield', 'support', 'tip', 'verified'],
            sizes_px: [20, 24]
        }, {
            name: 'private_connectivity',
            version: 3,
            popularity: 380,
            codepoint: 59204,
            unsupported_families: [],
            categories: ['action'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'production_quantity_limits',
            version: 5,
            popularity: 1718,
            codepoint: 57809,
            unsupported_families: [],
            categories: ['action'],
            tags: ['!', 'alert', 'attention', 'bill', 'card', 'cart', 'cash', 'caution', 'coin', 'commerce', 'credit', 'currency', 'danger', 'dollars', 'error', 'exclamation', 'important', 'limits', 'mark', 'money', 'notification', 'online', 'pay', 'payment', 'production', 'quantity', 'shopping', 'symbol', 'warning'],
            sizes_px: [24]
        }, {
            name: 'psychology',
            version: 9,
            popularity: 4310,
            codepoint: 59978,
            unsupported_families: [],
            categories: ['social'],
            tags: ['behavior', 'body', 'brain', 'cognitive', 'function', 'gear', 'head', 'human', 'intellectual', 'mental', 'mind', 'people',
                'person', 'preferences', 'psychiatric', 'psychology', 'science', 'settings', 'social', 'therapy', 'thinking', 'thoughts'],
            sizes_px: [20, 24]
        }, {
            name: 'public',
            version: 10,
            popularity: 9466,
            codepoint: 59403,
            unsupported_families: [],
            categories: ['social'],
            tags: ['earth', 'global', 'globe', 'map', 'network', 'planet', 'public', 'social', 'space', 'web', 'world'],
            sizes_px: [24]
        }, {
            name: 'public_off',
            version: 6,
            popularity: 479,
            codepoint: 61898,
            unsupported_families: [],
            categories: ['social'],
            tags: ['disabled', 'earth', 'enabled', 'global', 'globe', 'map', 'network', 'off', 'on', 'planet', 'public', 'slash', 'social', 'space',
                'web', 'world'],
            sizes_px: [24]
        }, {
            name: 'publish',
            version: 10,
            popularity: 1373,
            codepoint: 57941,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['arrow', 'cloud', 'file', 'import', 'publish', 'up', 'upload'],
            sizes_px: [24]
        }, {
            name: 'published_with_changes',
            version: 4,
            popularity: 3761,
            codepoint: 62002,
            unsupported_families: [],
            categories: ['action'],
            tags: ['approve', 'arrow', 'arrows', 'changes', 'check', 'complete', 'done', 'inprogress', 'load', 'loading', 'mark', 'ok',
                'published', 'refresh', 'renew', 'replace', 'rotate', 'select', 'tick', 'validate', 'verified', 'with', 'yes'],
            sizes_px: [24]
        }, {
            name: 'push_pin',
            version: 11,
            popularity: 4180,
            codepoint: 61709,
            unsupported_families: [],
            categories: ['content'],
            tags: ['location', 'marker', 'pin', 'place', 'push', 'remember', 'save'],
            sizes_px: [20, 24]
        }, {
            name: 'qr_code',
            version: 10,
            popularity: 2907,
            codepoint: 61291,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['barcode', 'camera', 'code', 'media', 'product', 'qr', 'quick', 'response', 'smartphone', 'url', 'urls'],
            sizes_px: [20, 24]
        }, {
            name: 'qr_code_2',
            version: 4,
            popularity: 3136,
            codepoint: 57354,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['barcode', 'camera', 'code', 'media', 'product', 'qr', 'quick', 'response', 'smartphone', 'url', 'urls'],
            sizes_px: [24]
        }, {
            name: 'qr_code_scanner',
            version: 5,
            popularity: 5120,
            codepoint: 61958,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['barcode', 'camera', 'code', 'media', 'product', 'qr', 'quick', 'response', 'scanner', 'smartphone', 'url', 'urls'],
            sizes_px: [24]
        }, {
            name: 'query_builder',
            version: 11,
            popularity: 2469,
            codepoint: 59566,
            unsupported_families: [],
            categories: ['action'],
            tags: ['builder', 'clock', 'date', 'query', 'schedule', 'time'],
            sizes_px: [24]
        }, {
            name: 'query_stats',
            version: 2,
            popularity: 1336,
            codepoint: 58620,
            unsupported_families: [],
            categories: ['editor'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'question_answer',
            version: 10,
            popularity: 12374,
            codepoint: 59567,
            unsupported_families: [],
            categories: ['action'],
            tags: ['answer', 'bubble', 'chat', 'comment', 'communicate', 'conversation', 'feedback', 'message', 'question', 'speech', 'talk'],
            sizes_px: [24]
        }, {
            name: 'queue',
            version: 10,
            popularity: 707,
            codepoint: 57404,
            unsupported_families: [],
            categories: ['av'],
            tags: ['add', 'collection', 'layers', 'list', 'multiple', 'music', 'playlist', 'queue', 'stack', 'stream', 'video'],
            sizes_px: [24]
        }, {
            name: 'queue_music',
            version: 16,
            popularity: 915,
            codepoint: 57405,
            unsupported_families: [],
            categories: ['av'],
            tags: ['collection', 'list', 'music', 'playlist', 'queue'],
            sizes_px: [20, 24]
        }, {
            name: 'queue_play_next',
            version: 12,
            popularity: 266,
            codepoint: 57446,
            unsupported_families: [],
            categories: ['av'],
            tags: ['+', 'add', 'arrow', 'desktop', 'device', 'display', 'hardware', 'monitor', 'new', 'next', 'play', 'plus', 'queue', 'screen', 'steam', 'symbol', 'tv'],
            sizes_px: [24]
        }, {
            name: 'quickreply',
            version: 10,
            popularity: 732,
            codepoint: 61292,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bolt', 'bubble', 'chat', 'comment', 'communicate', 'fast', 'lightning', 'message', 'quick', 'quickreply', 'reply', 'speech', 'thunderbolt'],
            sizes_px: [20, 24]
        }, {
            name: 'quiz',
            version: 8,
            popularity: 3065,
            codepoint: 61516,
            unsupported_families: [],
            categories: ['device'],
            tags: ['?', 'assistance', 'faq', 'help', 'info', 'information', 'punctuation', 'question mark', 'quiz', 'support', 'symbol', 'test'],
            sizes_px: [24]
        }, {
            name: 'r_mobiledata',
            version: 7,
            popularity: 117,
            codepoint: 61517,
            unsupported_families: [],
            categories: ['device'],
            tags: ['alphabet', 'character', 'data', 'font', 'letter', 'mobile', 'r', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'radar',
            version: 8,
            popularity: 863,
            codepoint: 61518,
            unsupported_families: [],
            categories: ['device'],
            tags: ['detect', 'military', 'near', 'network', 'position', 'radar', 'scan'],
            sizes_px: [24]
        }, {
            name: 'radio',
            version: 10,
            popularity: 891,
            codepoint: 57406,
            unsupported_families: [],
            categories: ['av'],
            tags: ['antenna', 'audio', 'device', 'frequency', 'hardware', 'listen', 'media', 'music', 'player', 'radio', 'signal', 'tune'],
            sizes_px: [24]
        }, {
            name: 'radio_button_checked',
            version: 11,
            popularity: 6372,
            codepoint: 59447,
            unsupported_families: [],
            categories: ['toggle'],
            tags: ['app', 'application', 'bullet', 'button', 'checked', 'circle', 'components', 'design', 'form', 'interface', 'off', 'on', 'point', 'radio', 'record', 'screen', 'select', 'selected', 'site', 'toggle', 'ui', 'ux', 'web', 'website'],
            sizes_px: [24]
        }, {
            name: 'radio_button_unchecked',
            version: 11,
            popularity: 7971,
            codepoint: 59446,
            unsupported_families: [],
            categories: ['toggle'],
            tags: ['bullet', 'button', 'circle', 'deselected', 'form', 'off', 'on', 'point', 'radio', 'record', 'select', 'toggle', 'unchecked'],
            sizes_px: [24]
        }, {
            name: 'railway_alert',
            version: 8,
            popularity: 207,
            codepoint: 59857,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['!', 'alert', 'attention', 'automobile', 'bike', 'car', 'cars', 'caution', 'danger', 'direction', 'error', 'exclamation', 'important', 'maps', 'mark', 'notification', 'public', 'railway', 'scooter', 'subway', 'symbol', 'train', 'transportation', 'vehicle', 'vespa', 'warning'],
            sizes_px: [24]
        }, {
            name: 'ramen_dining',
            version: 8,
            popularity: 955,
            codepoint: 60004,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['breakfast', 'dining', 'dinner', 'drink', 'fastfood', 'food', 'lunch', 'meal', 'noodles', 'ramen', 'restaurant'],
            sizes_px: [20, 24]
        }, {
            name: 'rate_review',
            version: 9,
            popularity: 1741,
            codepoint: 58720,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['comment', 'feedback', 'pen', 'pencil', 'rate', 'review', 'stars', 'write'],
            sizes_px: [24]
        }, {
            name: 'raw_off',
            version: 8,
            popularity: 85,
            codepoint: 61519,
            unsupported_families: [],
            categories: ['image'],
            tags: ['alphabet', 'character', 'disabled', 'enabled', 'font', 'image', 'letter', 'off', 'on', 'original', 'photo', 'photography', 'raw', 'slash', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'raw_on',
            version: 8,
            popularity: 155,
            codepoint: 61520,
            unsupported_families: [],
            categories: ['image'],
            tags: ['alphabet', 'character', 'disabled', 'enabled', 'font', 'image', 'letter', 'off', 'on', 'original', 'photo', 'photography', 'raw', 'slash', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'read_more',
            version: 11,
            popularity: 1530,
            codepoint: 61293,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['arrow', 'more', 'read', 'text'],
            sizes_px: [20, 24]
        }, {
            name: 'real_estate_agent',
            version: 1,
            popularity: 680,
            codepoint: 59194,
            unsupported_families: [],
            categories: ['social'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'receipt',
            version: 10,
            popularity: 6004,
            codepoint: 59568,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bill', 'credit', 'invoice', 'paper', 'payment', 'receipt', 'sale'],
            sizes_px: [24]
        }, {
            name: 'receipt_long',
            version: 10,
            popularity: 5268,
            codepoint: 61294,
            unsupported_families: [],
            categories: ['image'],
            tags: ['bill', 'check', 'document', 'list', 'long', 'paper', 'paperwork', 'receipt', 'record', 'store', 'transaction'],
            sizes_px: [24]
        }, {
            name: 'recent_actors',
            version: 10,
            popularity: 884,
            codepoint: 57407,
            unsupported_families: [],
            categories: ['av'],
            tags: ['account', 'actors', 'avatar', 'card', 'cards', 'carousel', 'face', 'human', 'layers', 'list', 'people', 'person', 'profile', 'recent', 'thumbnail', 'user'],
            sizes_px: [24]
        }, {
            name: 'recommend',
            version: 9,
            popularity: 1806,
            codepoint: 59858,
            unsupported_families: [],
            categories: ['social'],
            tags: ['approved', 'circle', 'confirm', 'favorite', 'gesture', 'hand', 'like', 'reaction', 'recommend', 'social', 'support', 'thumbs', 'up', 'well'],
            sizes_px: [24]
        }, {
            name: 'record_voice_over',
            version: 10,
            popularity: 3519,
            codepoint: 59679,
            unsupported_families: [],
            categories: ['action'],
            tags: ['account', 'face', 'human', 'over', 'people', 'person', 'profile', 'record', 'recording', 'speak', 'speaking', 'speech', 'transcript', 'user', 'voice'],
            sizes_px: [24]
        }, {
            name: 'recycling',
            version: 1,
            popularity: 1236,
            codepoint: 59232,
            unsupported_families: [],
            categories: ['social'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'redeem',
            version: 10,
            popularity: 2235,
            codepoint: 59569,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bill', 'card', 'cart', 'cash', 'certificate', 'coin', 'commerce', 'credit', 'currency', 'dollars', 'gift', 'giftcard', 'money', 'online', 'pay', 'payment', 'present', 'redeem', 'shopping'],
            sizes_px: [24]
        }, {
            name: 'redo',
            version: 11,
            popularity: 1774,
            codepoint: 57690,
            unsupported_families: [],
            categories: ['content'],
            tags: ['arrow', 'backward', 'forward', 'next', 'redo', 'repeat', 'rotate', 'undo'],
            sizes_px: [24]
        }, {
            name: 'reduce_capacity',
            version: 4,
            popularity: 751,
            codepoint: 61980,
            unsupported_families: [],
            categories: ['social'],
            tags: ['arrow', 'body', 'capacity', 'covid', 'decrease', 'down', 'human', 'people', 'person', 'reduce', 'social'],
            sizes_px: [24]
        }, {
            name: 'refresh',
            version: 11,
            popularity: 9485,
            codepoint: 58837,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['around', 'arrow', 'arrows', 'direction', 'inprogress', 'load', 'loading refresh', 'navigation', 'refresh', 'renew', 'right', 'rotate', 'turn'],
            sizes_px: [24]
        }, {
            name: 'remember_me',
            version: 8,
            popularity: 444,
            codepoint: 61521,
            unsupported_families: [],
            categories: ['device'],
            tags: ['Android', 'OS', 'avatar', 'device', 'hardware', 'human', 'iOS', 'identity', 'me', 'mobile', 'people', 'person', 'phone', 'profile', 'remember', 'tablet', 'user'],
            sizes_px: [24]
        }, {
            name: 'remove',
            version: 11,
            popularity: 7283,
            codepoint: 57691,
            unsupported_families: [],
            categories: ['content'],
            tags: ['can', 'delete', 'minus', 'negative', 'remove', 'substract', 'trash'],
            sizes_px: [24]
        }, {
            name: 'remove_circle',
            version: 14,
            popularity: 4327,
            codepoint: 57692,
            unsupported_families: [],
            categories: ['content'],
            tags: ['block', 'can', 'circle', 'delete', 'minus', 'negative', 'remove', 'substract', 'trash'],
            sizes_px: [24]
        }, {
            name: 'remove_circle_outline',
            version: 10,
            popularity: 5288,
            codepoint: 57693,
            unsupported_families: [],
            categories: ['content'],
            tags: ['block', 'can', 'circle', 'delete', 'minus', 'negative', 'outline', 'remove', 'substract', 'trash'],
            sizes_px: [24]
        }, {
            name: 'remove_done',
            version: 8,
            popularity: 791,
            codepoint: 59859,
            unsupported_families: [],
            categories: ['action'],
            tags: ['approve', 'check', 'complete', 'disabled', 'done', 'enabled', 'finished', 'mark', 'multiple', 'off', 'ok', 'on', 'remove', 'select', 'slash', 'tick', 'yes'],
            sizes_px: [24]
        }, {
            name: 'remove_from_queue',
            version: 11,
            popularity: 207,
            codepoint: 57447,
            unsupported_families: [],
            categories: ['av'],
            tags: ['desktop', 'device', 'display', 'from', 'hardware', 'monitor', 'queue', 'remove', 'screen', 'steam'],
            sizes_px: [24]
        }, {
            name: 'remove_moderator',
            version: 9,
            popularity: 473,
            codepoint: 59860,
            unsupported_families: [],
            categories: ['social'],
            tags: ['certified', 'disabled', 'enabled', 'moderator', 'off', 'on', 'privacy', 'private', 'protect', 'protection', 'remove', 'security', 'shield', 'slash', 'verified'],
            sizes_px: [24]
        }, {
            name: 'remove_red_eye',
            version: 10,
            popularity: 3383,
            codepoint: 58391,
            unsupported_families: [],
            categories: ['image'],
            tags: ['eye', 'iris', 'look', 'looking', 'preview', 'red', 'remove', 'see', 'sight', 'vision'],
            sizes_px: [24]
        }, {
            name: 'remove_shopping_cart',
            version: 10,
            popularity: 1025,
            codepoint: 59688,
            unsupported_families: [],
            categories: ['action'],
            tags: ['card', 'cart', 'cash', 'checkout', 'coin', 'commerce', 'credit', 'currency', 'disabled', 'dollars', 'enabled', 'off', 'on', 'online', 'pay', 'payment', 'remove', 'shopping', 'slash', 'tick'],
            sizes_px: [24]
        }, {
            name: 'reorder',
            version: 11,
            popularity: 5197,
            codepoint: 59646,
            unsupported_families: [],
            categories: ['action'],
            tags: ['format', 'lines', 'list', 'order', 'reorder', 'stacked'],
            sizes_px: [24]
        }, {
            name: 'repeat',
            version: 10,
            popularity: 1407,
            codepoint: 57408,
            unsupported_families: [],
            categories: ['av'],
            tags: ['arrow', 'arrows', 'control', 'controls', 'media', 'music', 'repeat', 'video'],
            sizes_px: [24]
        }, {
            name: 'repeat_on',
            version: 10,
            popularity: 388,
            codepoint: 59862,
            unsupported_families: [],
            categories: ['av'],
            tags: ['arrow', 'arrows', 'control', 'controls', 'media', 'music', 'on', 'repeat', 'video'],
            sizes_px: [24]
        }, {
            name: 'repeat_one',
            version: 10,
            popularity: 333,
            codepoint: 57409,
            unsupported_families: [],
            categories: ['av'],
            tags: ['1', 'arrow', 'arrows', 'control', 'controls', 'digit', 'media', 'music', 'number', 'one', 'repeat', 'symbol', 'video'],
            sizes_px: [24]
        }, {
            name: 'repeat_one_on',
            version: 10,
            popularity: 209,
            codepoint: 59863,
            unsupported_families: [],
            categories: ['av'],
            tags: ['arrow', 'arrows', 'control', 'controls', 'digit', 'media', 'music', 'number', 'on', 'one', 'repeat', 'symbol', 'video'],
            sizes_px: [24]
        }, {
            name: 'replay',
            version: 11,
            popularity: 3532,
            codepoint: 57410,
            unsupported_families: [],
            categories: ['av'],
            tags: ['arrow', 'arrows', 'control', 'controls', 'music', 'refresh', 'renew', 'repeat', 'replay', 'video'],
            sizes_px: [24]
        }, {
            name: 'replay_10',
            version: 12,
            popularity: 751,
            codepoint: 57433,
            unsupported_families: [],
            categories: ['av'],
            tags: ['10', 'arrow', 'arrows', 'control', 'controls', 'digit', 'music', 'number', 'refresh', 'renew', 'repeat', 'replay', 'symbol', 'ten', 'video'],
            sizes_px: [24]
        }, {
            name: 'replay_30',
            version: 12,
            popularity: 411,
            codepoint: 57434,
            unsupported_families: [],
            categories: ['av'],
            tags: ['30', 'arrow', 'arrows', 'control', 'controls', 'digit', 'music', 'number', 'refresh', 'renew', 'repeat', 'replay', 'symbol', 'thirty', 'video'],
            sizes_px: [24]
        }, {
            name: 'replay_5',
            version: 12,
            popularity: 299,
            codepoint: 57435,
            unsupported_families: [],
            categories: ['av'],
            tags: ['5', 'arrow', 'arrows', 'control', 'controls', 'digit', 'five', 'music', 'number', 'refresh', 'renew', 'repeat', 'replay', 'symbol', 'video'],
            sizes_px: [24]
        }, {
            name: 'replay_circle_filled',
            version: 10,
            popularity: 730,
            codepoint: 59864,
            unsupported_families: [],
            categories: ['av'],
            tags: ['arrow', 'arrows', 'circle', 'control', 'controls', 'filled', 'music', 'refresh', 'renew', 'repeat', 'replay', 'video'],
            sizes_px: [24]
        }, {
            name: 'reply',
            version: 15,
            popularity: 4330,
            codepoint: 57694,
            unsupported_families: [],
            categories: ['content'],
            tags: ['arrow', 'backward', 'left', 'mail', 'message', 'reply', 'send', 'share'],
            sizes_px: [24]
        }, {
            name: 'reply_all',
            version: 12,
            popularity: 886,
            codepoint: 57695,
            unsupported_families: [],
            categories: ['content'],
            tags: ['all', 'arrow', 'backward', 'group', 'left', 'mail', 'message', 'multiple', 'reply', 'send', 'share'],
            sizes_px: [24]
        }, {
            name: 'report',
            version: 13,
            popularity: 2882,
            codepoint: 57696,
            unsupported_families: [],
            categories: ['content'],
            tags: ['!', 'alert', 'attention', 'caution', 'danger', 'error', 'exclamation', 'important', 'mark', 'notification', 'octagon', 'report', 'symbol', 'warning'],
            sizes_px: [24]
        }, {
            name: 'report_gmailerrorred',
            version: 9,
            popularity: 1301,
            codepoint: 61522,
            unsupported_families: [],
            categories: ['content'],
            tags: ['!', 'alert', 'attention', 'caution', 'danger', 'error', 'exclamation', 'gmail', 'gmailerrorred', 'important', 'mark', 'notification', 'octagon', 'report', 'symbol', 'warning'],
            sizes_px: [24]
        }, {
            name: 'report_off',
            version: 10,
            popularity: 298,
            codepoint: 57712,
            unsupported_families: [],
            categories: ['content'],
            tags: ['!', 'alert', 'attention', 'caution', 'danger', 'disabled', 'enabled', 'error', 'exclamation', 'important', 'mark', 'notification', 'octagon', 'off', 'offline', 'on', 'report', 'slash', 'symbol', 'warning'],
            sizes_px: [24]
        }, {
            name: 'report_problem',
            version: 13,
            popularity: 8530,
            codepoint: 59570,
            unsupported_families: [],
            categories: ['action'],
            tags: ['!', 'alert', 'attention', 'caution', 'danger', 'error', 'exclamation', 'feedback', 'important', 'mark', 'notification', 'problem', 'report', 'symbol', 'triangle', 'warning'],
            sizes_px: [24]
        }, {
            name: 'request_page',
            version: 5,
            popularity: 880,
            codepoint: 61996,
            unsupported_families: [],
            categories: ['action'],
            tags: [],
            sizes_px: [24]
        }, {
            name: 'request_quote',
            version: 5,
            popularity: 3068,
            codepoint: 61878,
            unsupported_families: [],
            categories: ['file'],
            tags: ['bill', 'card', 'cash', 'coin', 'commerce', 'cost', 'credit', 'currency', 'dollars', 'finance', 'money', 'online', 'pay', 'payment', 'price', 'quote', 'request', 'shopping', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'reset_tv',
            version: 8,
            popularity: 215,
            codepoint: 59865,
            unsupported_families: [],
            categories: ['device'],
            tags: ['arrow', 'device', 'hardware', 'monitor', 'reset', 'television', 'tv'],
            sizes_px: [24]
        }, {
            name: 'restart_alt',
            version: 8,
            popularity: 5165,
            codepoint: 61523,
            unsupported_families: [],
            categories: ['device'],
            tags: ['alt', 'around', 'arrow', 'inprogress', 'load', 'loading refresh', 'reboot', 'renew', 'repeat', 'reset', 'restart'],
            sizes_px: [24]
        }, {
            name: 'restaurant',
            version: 11,
            popularity: 4738,
            codepoint: 58732,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['breakfast', 'dining', 'dinner', 'eat', 'food', 'fork', 'knife', 'local', 'lunch', 'meal', 'places', 'restaurant', 'spoon', 'utensils'],
            sizes_px: [24]
        }, {
            name: 'restaurant_menu',
            version: 10,
            popularity: 2581,
            codepoint: 58721,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['book', 'dining', 'eat', 'food', 'fork', 'knife', 'local', 'meal', 'menu', 'restaurant', 'spoon'],
            sizes_px: [24]
        }, {
            name: 'restore',
            version: 10,
            popularity: 2376,
            codepoint: 59571,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrow', 'back', 'backwards', 'clock', 'date', 'history', 'refresh', 'renew', 'restore', 'reverse', 'rotate', 'schedule', 'time', 'turn'],
            sizes_px: [24]
        }, {
            name: 'restore_from_trash',
            version: 10,
            popularity: 934,
            codepoint: 59704,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrow', 'back', 'backwards', 'clock', 'date', 'history', 'refresh', 'renew', 'restore', 'reverse', 'rotate', 'schedule', 'time', 'turn'],
            sizes_px: [24]
        }, {
            name: 'restore_page',
            version: 10,
            popularity: 637,
            codepoint: 59689,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrow', 'data', 'doc', 'file', 'page', 'paper', 'refresh', 'restore', 'rotate', 'sheet', 'storage'],
            sizes_px: [24]
        }, {
            name: 'reviews',
            version: 8,
            popularity: 1546,
            codepoint: 61524,
            unsupported_families: [],
            categories: ['device'],
            tags: ['bubble', 'chat', 'comment', 'communicate', 'feedback', 'message', 'rate', 'rating', 'recommendation', 'reviews', 'speech'],
            sizes_px: [24]
        }, {
            name: 'rice_bowl',
            version: 4,
            popularity: 325,
            codepoint: 61941,
            unsupported_families: [],
            categories: ['places'],
            tags: ['bowl', 'dinner', 'food', 'lunch', 'meal', 'restaurant', 'rice'],
            sizes_px: [24]
        }, {
            name: 'ring_volume',
            version: 11,
            popularity: 497,
            codepoint: 57553,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['call', 'calling', 'cell', 'contact', 'device', 'hardware', 'incoming', 'mobile', 'phone', 'ring', 'ringer', 'sound', 'telephone', 'volume'],
            sizes_px: [24]
        }, {
            name: 'roofing',
            version: 4,
            popularity: 896,
            codepoint: 61953,
            unsupported_families: [],
            categories: ['places'],
            tags: ['architecture', 'building', 'chimney', 'construction', 'estate', 'home', 'house', 'real', 'residence', 'residential', 'roof', 'roofing', 'service', 'shelter'],
            sizes_px: [24]
        }, {
            name: 'room',
            version: 14,
            popularity: 6405,
            codepoint: 59572,
            unsupported_families: [],
            categories: ['action'],
            tags: ['destination', 'direction', 'location', 'maps', 'pin', 'place', 'room', 'stop'],
            sizes_px: [24]
        }, {
            name: 'room_preferences',
            version: 5,
            popularity: 741,
            codepoint: 61880,
            unsupported_families: [],
            categories: ['places'],
            tags: ['building', 'door', 'doorway', 'entrance', 'gear', 'home', 'house', 'interior', 'office', 'open', 'preferences', 'room', 'settings'],
            sizes_px: [24]
        }, {
            name: 'room_service',
            version: 9,
            popularity: 774,
            codepoint: 60233,
            unsupported_families: [],
            categories: ['places'],
            tags: ['alert', 'bell', 'delivery', 'hotel', 'notify', 'room', 'service'],
            sizes_px: [24]
        }, {
            name: 'rotate_90_degrees_ccw',
            version: 10,
            popularity: 371,
            codepoint: 58392,
            unsupported_families: [],
            categories: ['image'],
            tags: ['90', 'arrow', 'arrows', 'ccw', 'degrees', 'direction', 'edit', 'editing', 'image', 'photo', 'rotate', 'turn'],
            sizes_px: [24]
        }, {
            name: 'rotate_left',
            version: 11,
            popularity: 811,
            codepoint: 58393,
            unsupported_families: [],
            categories: ['image'],
            tags: ['around', 'arrow', 'direction', 'inprogress', 'left', 'load', 'loading refresh', 'renew', 'rotate', 'turn'],
            sizes_px: [24]
        }, {
            name: 'rotate_right',
            version: 11,
            popularity: 1081,
            codepoint: 58394,
            unsupported_families: [],
            categories: ['image'],
            tags: ['around', 'arrow', 'direction', 'inprogress', 'load', 'loading refresh', 'renew', 'right', 'rotate', 'turn'],
            sizes_px: [24]
        }, {
            name: 'rounded_corner',
            version: 12,
            popularity: 347,
            codepoint: 59680,
            unsupported_families: [],
            categories: ['action'],
            tags: ['adjust', 'corner', 'edit', 'rounded', 'shape', 'square', 'transform'],
            sizes_px: [24]
        }, {
            name: 'router',
            version: 11,
            popularity: 985,
            codepoint: 58152,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['box', 'cable', 'connection', 'hardware', 'internet', 'network', 'router', 'signal', 'wifi'],
            sizes_px: [24]
        }, {
            name: 'rowing',
            version: 12,
            popularity: 894,
            codepoint: 59681,
            unsupported_families: [],
            categories: ['action'],
            tags: ['activity', 'boat', 'body', 'canoe', 'human', 'people', 'person', 'row', 'rowing', 'sport', 'water'],
            sizes_px: [24]
        }, {
            name: 'rss_feed',
            version: 10,
            popularity: 1986,
            codepoint: 57573,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['application', 'blog', 'connection', 'data', 'feed', 'internet', 'network', 'rss', 'service', 'signal', 'website', 'wifi', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'rsvp',
            version: 8,
            popularity: 162,
            codepoint: 61525,
            unsupported_families: [],
            categories: ['device'],
            tags: ['alphabet', 'character', 'font', 'invitation', 'invite', 'letter', 'plaît', 'respond', 'rsvp', 'répondez', 'sil', 'symbol', 'text', 'type', 'vous'],
            sizes_px: [24]
        }, {
            name: 'rtt',
            version: 10,
            popularity: 258,
            codepoint: 59821,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['call', 'real', 'rrt', 'text', 'time'],
            sizes_px: [24]
        }, {
            name: 'rule',
            version: 6,
            popularity: 2791,
            codepoint: 61890,
            unsupported_families: [],
            categories: ['action'],
            tags: ['approve', 'check', 'complete', 'done', 'incomplete', 'line', 'mark', 'missing', 'no', 'ok', 'rule', 'select', 'tick', 'validate', 'verified', 'wrong', 'x', 'yes'],
            sizes_px: [24]
        }, {
            name: 'rule_folder',
            version: 5,
            popularity: 604,
            codepoint: 61897,
            unsupported_families: [],
            categories: ['file'],
            tags: ['approve', 'cancel', 'check', 'close', 'complete', 'data', 'doc', 'document', 'done', 'drive', 'exit', 'file', 'folder', 'mark', 'no', 'ok', 'remove', 'rule', 'select', 'sheet', 'slide', 'storage', 'tick', 'validate', 'verified', 'x', 'yes'],
            sizes_px: [24]
        }, {
            name: 'run_circle',
            version: 9,
            popularity: 465,
            codepoint: 61295,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['body', 'circle', 'exercise', 'human', 'people', 'person', 'run', 'running'],
            sizes_px: [20, 24]
        }, {
            name: 'running_with_errors',
            version: 2,
            popularity: 615,
            codepoint: 58653,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['!', 'alert', 'attention', 'caution', 'danger', 'duration', 'error', 'errors', 'exclamation', 'important', 'mark', 'notification', 'process', 'processing', 'running', 'symbol', 'time', 'warning', 'with'],
            sizes_px: [20, 24]
        }, {
            name: 'rv_hookup',
            version: 10,
            popularity: 335,
            codepoint: 58946,
            unsupported_families: [],
            categories: ['places'],
            tags: ['arrow', 'attach', 'automobile', 'automotive', 'back', 'car', 'cars', 'connect', 'direction', 'hookup', 'left', 'maps', 'public', 'right', 'rv', 'trailer', 'transportation', 'travel', 'truck', 'van', 'vehicle'],
            sizes_px: [24]
        }, {
            name: 'safety_divider',
            version: 5,
            popularity: 458,
            codepoint: 57804,
            unsupported_families: [],
            categories: ['social'],
            tags: ['apart', 'distance', 'divider', 'safety', 'separate', 'social', 'space'],
            sizes_px: [24]
        }, {
            name: 'sailing',
            version: 2,
            popularity: 966,
            codepoint: 58626,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['boat', 'entertainment', 'fishing', 'hobby', 'ocean', 'sailboat', 'sailing', 'sea', 'social sports', 'travel', 'water'],
            sizes_px: [20, 24]
        }, {
            name: 'sanitizer',
            version: 4,
            popularity: 720,
            codepoint: 61981,
            unsupported_families: [],
            categories: ['social'],
            tags: ['bacteria', 'bottle', 'clean', 'covid', 'disinfect', 'germs', 'pump', 'sanitizer'],
            sizes_px: [24]
        }, {
            name: 'satellite',
            version: 10,
            popularity: 479,
            codepoint: 58722,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['bluetooth', 'connect', 'connection', 'connectivity', 'data', 'device', 'image', 'internet', 'landscape', 'location', 'maps', 'mountain', 'mountains', 'network', 'photo', 'photography', 'picture', 'satellite', 'scan', 'service', 'signal', 'symbol', 'wireless-- wifi'],
            sizes_px: [24]
        }, {
            name: 'save',
            version: 10,
            popularity: 8585,
            codepoint: 57697,
            unsupported_families: [],
            categories: ['content'],
            tags: ['data', 'disk', 'document', 'drive', 'file', 'floppy', 'multimedia', 'save', 'storage'],
            sizes_px: [24]
        }, {
            name: 'save_alt',
            version: 10,
            popularity: 2559,
            codepoint: 57713,
            unsupported_families: [],
            categories: ['content'],
            tags: ['alt', 'arrow', 'disk', 'document', 'down', 'file', 'floppy', 'multimedia', 'save'],
            sizes_px: [24]
        }, {
            name: 'saved_search',
            version: 9,
            popularity: 1345,
            codepoint: 59921,
            unsupported_families: [],
            categories: ['action'],
            tags: ['find', 'glass', 'important', 'look', 'magnify', 'magnifying', 'marked', 'saved', 'search', 'see', 'star'],
            sizes_px: [24]
        }, {
            name: 'savings',
            version: 3,
            popularity: 7113,
            codepoint: 58091,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bank', 'bill', 'card', 'cash', 'coin', 'commerce', 'cost', 'credit', 'currency', 'dollars', 'finance', 'money', 'online', 'pay', 'payment', 'pig', 'piggy', 'savings', 'symbol'],
            sizes_px: [20, 24]
        }, {
            name: 'scanner',
            version: 10,
            popularity: 365,
            codepoint: 58153,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['copy', 'device', 'hardware', 'machine', 'scan', 'scanner'],
            sizes_px: [24]
        }, {
            name: 'scatter_plot',
            version: 10,
            popularity: 634,
            codepoint: 57960,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['analytics', 'bar', 'bars', 'chart', 'circles', 'data', 'diagram', 'dot', 'graph', 'infographic', 'measure', 'metrics', 'plot', 'scatter', 'statistics', 'tracking'],
            sizes_px: [24]
        }, {
            name: 'schedule',
            version: 12,
            popularity: 20023,
            codepoint: 59573,
            unsupported_families: [],
            categories: ['action'],
            tags: ['clock', 'date', 'schedule', 'time'],
            sizes_px: [24]
        }, {
            name: 'schedule_send',
            version: 12,
            popularity: 1471,
            codepoint: 59914,
            unsupported_families: [],
            categories: ['action'],
            tags: ['calendar', 'clock', 'date', 'email', 'letter', 'mail', 'remember', 'schedule', 'send', 'share', 'time'],
            sizes_px: [24]
        }, {
            name: 'schema',
            version: 2,
            popularity: 627,
            codepoint: 58621,
            unsupported_families: [],
            categories: ['editor'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'school',
            version: 10,
            popularity: 10573,
            codepoint: 59404,
            unsupported_families: [],
            categories: ['social'],
            tags: ['academy', 'achievement', 'cap', 'class', 'college', 'education', 'graduation', 'hat', 'knowledge', 'learning', 'school', 'university'],
            sizes_px: [24]
        }, {
            name: 'science',
            version: 15,
            popularity: 3110,
            codepoint: 59979,
            unsupported_families: [],
            categories: ['social'],
            tags: ['beaker', 'chemical', 'chemistry', 'experiment', 'flask', 'glass', 'laboratory', 'research', 'science', 'tube'],
            sizes_px: [20, 24]
        }, {
            name: 'score',
            version: 10,
            popularity: 359,
            codepoint: 57961,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['2k', 'alphabet', 'analytics', 'bar', 'bars', 'character', 'chart', 'data', 'diagram', 'digit', 'font', 'graph', 'infographic', 'letter', 'measure', 'metrics', 'number', 'score', 'statistics', 'symbol', 'text', 'tracking', 'type'],
            sizes_px: [24]
        }, {
            name: 'screen_lock_landscape',
            version: 14,
            popularity: 140,
            codepoint: 57790,
            unsupported_families: [],
            categories: ['device'],
            tags: ['Android', 'OS', 'device', 'hardware', 'iOS', 'landscape', 'lock', 'mobile', 'phone', 'rotate', 'screen', 'tablet'],
            sizes_px: [24]
        }, {
            name: 'screen_lock_portrait',
            version: 15,
            popularity: 216,
            codepoint: 57791,
            unsupported_families: [],
            categories: ['device'],
            tags: ['Android', 'OS', 'device', 'hardware', 'iOS', 'lock', 'mobile', 'phone', 'portrait', 'rotate', 'screen', 'tablet'],
            sizes_px: [24]
        }, {
            name: 'screen_lock_rotation',
            version: 14,
            popularity: 156,
            codepoint: 57792,
            unsupported_families: [],
            categories: ['device'],
            tags: ['Android', 'OS', 'arrow', 'device', 'hardware', 'iOS', 'lock', 'mobile', 'phone', 'rotate', 'rotation', 'screen', 'tablet', 'turn'],
            sizes_px: [24]
        }, {
            name: 'screen_rotation',
            version: 10,
            popularity: 410,
            codepoint: 57793,
            unsupported_families: [],
            categories: ['device'],
            tags: ['Android', 'OS', 'arrow', 'device', 'hardware', 'iOS', 'mobile', 'phone', 'rotate', 'rotation', 'screen', 'tablet', 'turn'],
            sizes_px: [24]
        }, {
            name: 'screen_search_desktop',
            version: 8,
            popularity: 509,
            codepoint: 61296,
            unsupported_families: [],
            categories: ['device'],
            tags: ['Android', 'OS', 'arrow', 'desktop', 'device', 'hardware', 'iOS', 'lock', 'monitor', 'rotate', 'screen', 'web'],
            sizes_px: [24]
        }, {
            name: 'screen_share',
            version: 10,
            popularity: 916,
            codepoint: 57570,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['Android', 'OS', 'arrow', 'cast', 'chrome', 'device', 'display', 'hardware', 'iOS', 'laptop', 'mac', 'mirror', 'monitor', 'screen', 'share', 'steam', 'streaming', 'web', 'window'],
            sizes_px: [24]
        }, {
            name: 'screenshot',
            version: 8,
            popularity: 387,
            codepoint: 61526,
            unsupported_families: [],
            categories: ['device'],
            tags: ['Android', 'OS', 'cell', 'crop', 'device', 'hardware', 'iOS', 'mobile', 'phone', 'screen', 'screenshot', 'tablet'],
            sizes_px: [24]
        }, {
            name: 'sd',
            version: 8,
            popularity: 165,
            codepoint: 59869,
            unsupported_families: [],
            categories: ['av'],
            tags: ['alphabet', 'camera', 'card', 'character', 'data', 'device', 'digital', 'drive', 'flash', 'font', 'image', 'letter', 'memory', 'photo', 'sd', 'secure', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'sd_card',
            version: 10,
            popularity: 322,
            codepoint: 58915,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['camera', 'card', 'digital', 'memory', 'photos', 'sd', 'secure', 'storage'],
            sizes_px: [24]
        }, {
            name: 'sd_card_alert',
            version: 9,
            popularity: 171,
            codepoint: 61527,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['!', 'alert', 'attention', 'camera', 'card', 'caution', 'danger', 'digital', 'error', 'exclamation', 'important', 'mark', 'memory', 'notification', 'photos', 'sd', 'secure', 'storage', 'symbol', 'warning'],
            sizes_px: [24]
        }, {
            name: 'sd_storage',
            version: 10,
            popularity: 274,
            codepoint: 57794,
            unsupported_families: [],
            categories: ['device'],
            tags: ['camera', 'card', 'data', 'digital', 'memory', 'sd', 'secure', 'storage'],
            sizes_px: [24]
        }, {
            name: 'search',
            version: 12,
            popularity: 103876,
            codepoint: 59574,
            unsupported_families: [],
            categories: ['action'],
            tags: ['filter', 'find', 'glass', 'look', 'magnify', 'magnifying', 'search', 'see'],
            sizes_px: [24]
        }, {
            name: 'search_off',
            version: 10,
            popularity: 1065,
            codepoint: 60022,
            unsupported_families: [],
            categories: ['action'],
            tags: ['cancel', 'close', 'disabled', 'enabled', 'find', 'glass', 'look', 'magnify', 'magnifying', 'off', 'on', 'search', 'see', 'slash', 'stop', 'x'],
            sizes_px: [20, 24]
        }, {
            name: 'security',
            version: 10,
            popularity: 3313,
            codepoint: 58154,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['certified', 'privacy', 'private', 'protect', 'protection', 'security', 'shield', 'verified'],
            sizes_px: [24]
        }, {
            name: 'security_update',
            version: 9,
            popularity: 260,
            codepoint: 61528,
            unsupported_families: [],
            categories: ['device'],
            tags: ['Android', 'OS', 'arrow', 'device', 'down', 'download', 'hardware', 'iOS', 'mobile', 'phone', 'security', 'tablet', 'update'],
            sizes_px: [24]
        }, {
            name: 'security_update_good',
            version: 8,
            popularity: 305,
            codepoint: 61529,
            unsupported_families: [],
            categories: ['device'],
            tags: ['Android', 'OS', 'checkmark', 'device', 'good', 'hardware', 'iOS', 'mobile', 'ok', 'phone', 'security', 'tablet', 'tick', 'update'],
            sizes_px: [24]
        }, {
            name: 'security_update_warning',
            version: 8,
            popularity: 204,
            codepoint: 61530,
            unsupported_families: [],
            categories: ['device'],
            tags: ['!', 'Android', 'OS', 'alert', 'attention', 'caution', 'danger', 'device', 'download', 'error', 'exclamation', 'hardware', 'iOS', 'important', 'mark', 'mobile', 'notification', 'phone', 'security', 'symbol', 'tablet', 'update', 'warning'],
            sizes_px: [24]
        }, {
            name: 'segment',
            version: 9,
            popularity: 1508,
            codepoint: 59723,
            unsupported_families: [],
            categories: ['action'],
            tags: ['alignment', 'fonts', 'format', 'lines', 'list', 'paragraph', 'part', 'piece', 'rule', 'rules', 'segment', 'style', 'text'],
            sizes_px: [24]
        }, {
            name: 'select_all',
            version: 10,
            popularity: 796,
            codepoint: 57698,
            unsupported_families: [],
            categories: ['content'],
            tags: ['all', 'select', 'selection', 'square', 'tool'],
            sizes_px: [24]
        }, {
            name: 'self_improvement',
            version: 9,
            popularity: 2339,
            codepoint: 60024,
            unsupported_families: [],
            categories: ['social'],
            tags: ['body', 'calm', 'care', 'chi', 'human', 'improvement', 'meditate', 'meditation', 'people', 'person', 'relax', 'self', 'sitting', 'wellbeing', 'yoga', 'zen'],
            sizes_px: [20, 24]
        }, {
            name: 'sell',
            version: 8,
            popularity: 3539,
            codepoint: 61531,
            unsupported_families: [],
            categories: ['device'],
            tags: ['bill', 'card', 'cart', 'cash', 'coin', 'commerce', 'credit', 'currency', 'dollars', 'money', 'online', 'pay', 'payment', 'price', 'sell', 'shopping', 'tag'],
            sizes_px: [24]
        }, {
            name: 'send',
            version: 15,
            popularity: 13172,
            codepoint: 57699,
            unsupported_families: [],
            categories: ['content'],
            tags: ['email', 'mail', 'message', 'paper', 'plane', 'reply', 'right', 'send', 'share'],
            sizes_px: [24]
        }, {
            name: 'send_and_archive',
            version: 9,
            popularity: 610,
            codepoint: 59916,
            unsupported_families: [],
            categories: ['action'],
            tags: ['archive', 'arrow', 'down', 'download', 'email', 'letter', 'mail', 'save', 'send', 'share'],
            sizes_px: [20, 24]
        }, {
            name: 'send_to_mobile',
            version: 9,
            popularity: 516,
            codepoint: 61532,
            unsupported_families: [],
            categories: ['device'],
            tags: ['Android', 'OS', 'arrow', 'device', 'export', 'forward', 'hardware', 'iOS', 'mobile', 'phone', 'right', 'send', 'share', 'tablet', 'to'],
            sizes_px: [24]
        }, {
            name: 'sensor_door',
            version: 6,
            popularity: 1152,
            codepoint: 61877,
            unsupported_families: [],
            categories: ['home'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'sensor_window',
            version: 6,
            popularity: 885,
            codepoint: 61876,
            unsupported_families: [],
            categories: ['home'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'sensors',
            version: 2,
            popularity: 2530,
            codepoint: 58654,
            unsupported_families: [],
            categories: ['action'],
            tags: ['connection', 'network', 'scan', 'sensors', 'signal', 'wireless'],
            sizes_px: [20, 24]
        }, {
            name: 'sensors_off',
            version: 3,
            popularity: 511,
            codepoint: 58655,
            unsupported_families: [],
            categories: ['action'],
            tags: ['connection', 'disabled', 'enabled', 'network', 'off', 'on', 'scan', 'sensors', 'signal', 'slash', 'wireless'],
            sizes_px: [20, 24]
        }, {
            name: 'sentiment_dissatisfied',
            version: 9,
            popularity: 2599,
            codepoint: 59409,
            unsupported_families: [],
            categories: ['social'],
            tags: ['angry', 'disappointed', 'dislike', 'dissatisfied', 'emotions', 'expressions', 'face', 'feelings', 'frown', 'mood', 'person', 'sad', 'sentiment', 'survey', 'unhappy', 'unsatisfied', 'upset'],
            sizes_px: [24]
        }, {
            name: 'sentiment_neutral',
            version: 9,
            popularity: 1512,
            codepoint: 59410,
            unsupported_families: [],
            categories: ['social'],
            tags: ['emotionless', 'emotions', 'expressions', 'face', 'feelings', 'fine', 'indifference', 'mood', 'neutral', 'okay', 'person', 'sentiment', 'survey'],
            sizes_px: [24]
        }, {
            name: 'sentiment_satisfied',
            version: 9,
            popularity: 3443,
            codepoint: 59411,
            unsupported_families: [],
            categories: ['social'],
            tags: ['emotions', 'expressions', 'face', 'feelings', 'glad', 'happiness', 'happy', 'like', 'mood', 'person', 'pleased', 'satisfied', 'sentiment', 'smile', 'smiling', 'survey'],
            sizes_px: [24]
        }, {
            name: 'sentiment_satisfied_alt',
            version: 9,
            popularity: 3131,
            codepoint: 57581,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['account', 'alt', 'emoji', 'face', 'happy', 'human', 'people', 'person', 'profile', 'satisfied', 'sentiment', 'smile', 'user'],
            sizes_px: [24]
        }, {
            name: 'sentiment_very_dissatisfied',
            version: 9,
            popularity: 2252,
            codepoint: 59412,
            unsupported_families: [],
            categories: ['social'],
            tags: ['angry', 'disappointed', 'dislike', 'dissatisfied', 'emotions', 'expressions', 'face', 'feelings', 'mood', 'person', 'sad', 'sentiment', 'sorrow', 'survey', 'unhappy', 'unsatisfied', 'upset', 'very'],
            sizes_px: [24]
        }, {
            name: 'sentiment_very_satisfied',
            version: 9,
            popularity: 3378,
            codepoint: 59413,
            unsupported_families: [],
            categories: ['social'],
            tags: ['emotions', 'expressions', 'face', 'feelings', 'glad', 'happiness', 'happy', 'like', 'mood', 'person', 'pleased', 'satisfied', 'sentiment', 'smile', 'smiling', 'survey', 'very'],
            sizes_px: [24]
        }, {
            name: 'set_meal',
            version: 4,
            popularity: 584,
            codepoint: 61930,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['chopsticks', 'dinner', 'fish', 'food', 'lunch', 'meal', 'restaurant', 'set', 'teishoku'],
            sizes_px: [24]
        }, {
            name: 'settings',
            version: 14,
            popularity: 70050,
            codepoint: 59576,
            unsupported_families: [],
            categories: ['action'],
            tags: ['application', 'change', 'details', 'gear', 'info', 'information', 'options', 'personal', 'service', 'settings'],
            sizes_px: [24]
        }, {
            name: 'settings_accessibility',
            version: 8,
            popularity: 1845,
            codepoint: 61533,
            unsupported_families: [],
            categories: ['action'],
            tags: ['accessibility', 'body', 'details', 'human', 'information', 'people', 'person', 'personal', 'preferences', 'profile', 'settings', 'user'],
            sizes_px: [24]
        }, {
            name: 'settings_applications',
            version: 9,
            popularity: 2692,
            codepoint: 59577,
            unsupported_families: [],
            categories: ['action'],
            tags: ['application', 'change', 'details', 'gear', 'info', 'information', 'options', 'personal', 'service', 'settings'],
            sizes_px: [24]
        }, {
            name: 'settings_backup_restore',
            version: 9,
            popularity: 1484,
            codepoint: 59578,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrow', 'back', 'backup', 'backwards', 'refresh', 'restore', 'reverse', 'rotate', 'settings'],
            sizes_px: [24]
        }, {
            name: 'settings_bluetooth',
            version: 9,
            popularity: 719,
            codepoint: 59579,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bluetooth', 'connect', 'connection', 'connectivity', 'device', 'settings', 'signal', 'symbol'],
            sizes_px: [24]
        }, {
            name: 'settings_brightness',
            version: 10,
            popularity: 752,
            codepoint: 59581,
            unsupported_families: [],
            categories: ['action'],
            tags: ['brightness', 'dark', 'filter', 'light', 'mode', 'setting', 'settings'],
            sizes_px: [24]
        }, {
            name: 'settings_cell',
            version: 9,
            popularity: 629,
            codepoint: 59580,
            unsupported_families: [],
            categories: ['action'],
            tags: ['Android', 'OS', 'cell', 'device', 'hardware', 'iOS', 'mobile', 'phone', 'settings', 'tablet'],
            sizes_px: [24]
        }, {
            name: 'settings_ethernet',
            version: 9,
            popularity: 1474,
            codepoint: 59582,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrows', 'computer', 'connect', 'connection', 'connectivity', 'dots', 'ethernet', 'internet', 'network', 'settings', 'wifi'],
            sizes_px: [24]
        }, {
            name: 'settings_input_antenna',
            version: 9,
            popularity: 1265,
            codepoint: 59583,
            unsupported_families: [],
            categories: ['action'],
            tags: ['airplay', 'antenna', 'arrows', 'cast', 'computer', 'connect', 'connection', 'connectivity', 'dots', 'input', 'internet', 'network', 'screencast', 'settings', 'stream', 'wifi', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'settings_input_component',
            version: 9,
            popularity: 1115,
            codepoint: 59584,
            unsupported_families: [],
            categories: ['action'],
            tags: ['audio', 'av', 'cable', 'cables', 'component', 'connect', 'connection', 'connectivity', 'input', 'internet', 'plug', 'points', 'settings', 'video', 'wifi'],
            sizes_px: [24]
        }, {
            name: 'settings_input_composite',
            version: 9,
            popularity: 816,
            codepoint: 59585,
            unsupported_families: [],
            categories: ['action'],
            tags: ['component', 'composite', 'connection', 'connectivity', 'input', 'plug', 'points', 'settings'],
            sizes_px: [24]
        }, {
            name: 'settings_input_hdmi',
            version: 9,
            popularity: 536,
            codepoint: 59586,
            unsupported_families: [],
            categories: ['action'],
            tags: ['cable', 'connection', 'connectivity', 'definition', 'hdmi', 'high', 'input', 'plug', 'plugin', 'points', 'settings', 'video', 'wire'],
            sizes_px: [24]
        }, {
            name: 'settings_input_svideo',
            version: 9,
            popularity: 437,
            codepoint: 59587,
            unsupported_families: [],
            categories: ['action'],
            tags: ['cable', 'connection', 'connectivity', 'definition', 'input', 'plug', 'plugin', 'points', 'settings', 'standard', 'svideo', 'video'],
            sizes_px: [24]
        }, {
            name: 'settings_overscan',
            version: 9,
            popularity: 750,
            codepoint: 59588,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrows', 'expand', 'image', 'photo', 'picture', 'scan', 'settings'],
            sizes_px: [24]
        }, {
            name: 'settings_phone',
            version: 13,
            popularity: 2367,
            codepoint: 59589,
            unsupported_families: [],
            categories: ['action'],
            tags: ['call', 'cell', 'contact', 'device', 'hardware', 'mobile', 'phone', 'settings', 'telephone'],
            sizes_px: [24]
        }, {
            name: 'settings_power',
            version: 9,
            popularity: 916,
            codepoint: 59590,
            unsupported_families: [],
            categories: ['action'],
            tags: ['info', 'information', 'off', 'on', 'power', 'save', 'settings', 'shutdown'],
            sizes_px: [24]
        }, {
            name: 'settings_remote',
            version: 9,
            popularity: 1095,
            codepoint: 59591,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bluetooth', 'connection', 'connectivity', 'device', 'remote', 'settings', 'signal', 'wifi', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'settings_suggest',
            version: 15,
            popularity: 3168,
            codepoint: 61534,
            unsupported_families: [],
            categories: ['device'],
            tags: ['change', 'details', 'gear', 'options', 'recommendation', 'service', 'settings', 'suggest', 'suggestion', 'system'],
            sizes_px: [24]
        }, {
            name: 'settings_system_daydream',
            version: 10,
            popularity: 283,
            codepoint: 57795,
            unsupported_families: [],
            categories: ['device'],
            tags: ['backup', 'cloud', 'daydream', 'drive', 'settings', 'storage', 'system'],
            sizes_px: [24]
        }, {
            name: 'settings_voice',
            version: 9,
            popularity: 1122,
            codepoint: 59592,
            unsupported_families: [],
            categories: ['action'],
            tags: ['mic', 'microphone', 'record', 'recorder', 'settings', 'speaker', 'voice'],
            sizes_px: [24]
        }, {
            name: 'share',
            version: 13,
            popularity: 13304,
            codepoint: 59405,
            unsupported_families: [],
            categories: ['social'],
            tags: ['android', 'connect', 'contect', 'link', 'media', 'multimedia', 'multiple', 'network', 'options', 'send', 'share', 'shared', 'sharing', 'social'],
            sizes_px: [24]
        }, {
            name: 'share_location',
            version: 15,
            popularity: 954,
            codepoint: 61535,
            unsupported_families: [],
            categories: ['device'],
            tags: ['destination', 'direction', 'gps', 'location', 'maps', 'pin', 'place', 'share', 'stop', 'tracking'],
            sizes_px: [24]
        }, {
            name: 'shield',
            version: 9,
            popularity: 2927,
            codepoint: 59872,
            unsupported_families: [],
            categories: ['content'],
            tags: ['certified', 'privacy', 'private', 'protect', 'protection', 'secure', 'security', 'shield', 'verified'],
            sizes_px: [24]
        }, {
            name: 'shop',
            version: 10,
            popularity: 1197,
            codepoint: 59593,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bag', 'bill', 'buy', 'card', 'cart', 'cash', 'coin', 'commerce', 'credit', 'currency', 'dollars', 'google', 'money', 'online', 'pay', 'payment', 'play', 'shop', 'shopping', 'store'],
            sizes_px: [24]
        }, {
            name: 'shop_2',
            version: 7,
            popularity: 325,
            codepoint: 57758,
            unsupported_families: [],
            categories: ['action'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'shop_two',
            version: 9,
            popularity: 534,
            codepoint: 59594,
            unsupported_families: [],
            categories: ['action'],
            tags: ['add', 'arrow', 'buy', 'cart', 'google', 'play', 'purchase', 'shop', 'shopping', 'two'],
            sizes_px: [24]
        }, {
            name: 'shopping_bag',
            version: 6,
            popularity: 11246,
            codepoint: 61900,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bag', 'bill', 'business', 'buy', 'card', 'cart', 'cash', 'coin', 'commerce', 'credit', 'currency', 'dollars', 'money', 'online', 'pay', 'payment', 'shop', 'shopping', 'store', 'storefront'],
            sizes_px: [24]
        }, {
            name: 'shopping_basket',
            version: 10,
            popularity: 5466,
            codepoint: 59595,
            unsupported_families: [],
            categories: ['action'],
            tags: ['add', 'basket', 'bill', 'buy', 'card', 'cart', 'cash', 'checkout', 'coin', 'commerce', 'credit', 'currency', 'dollars', 'money', 'online', 'pay', 'payment', 'shopping'],
            sizes_px: [24]
        }, {
            name: 'shopping_cart',
            version: 13,
            popularity: 34951,
            codepoint: 59596,
            unsupported_families: [],
            categories: ['action'],
            tags: ['add', 'bill', 'buy', 'card', 'cart', 'cash', 'checkout', 'coin', 'commerce', 'credit', 'currency', 'dollars', 'money', 'online', 'pay', 'payment', 'shopping'],
            sizes_px: [24]
        }, {
            name: 'short_text',
            version: 13,
            popularity: 421,
            codepoint: 57953,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['brief', 'comment', 'doc', 'document', 'note', 'short', 'text', 'write', 'writing'],
            sizes_px: [24]
        }, {
            name: 'shortcut',
            version: 8,
            popularity: 838,
            codepoint: 61536,
            unsupported_families: [],
            categories: ['device'],
            tags: ['arrow', 'direction', 'forward', 'right', 'shortcut'],
            sizes_px: [24]
        }, {
            name: 'show_chart',
            version: 11,
            popularity: 2685,
            codepoint: 59105,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['analytics', 'bar', 'bars', 'chart', 'data', 'diagram', 'graph', 'infographic', 'line', 'measure', 'metrics', 'presentation', 'show chart', 'statistics', 'tracking'],
            sizes_px: [24]
        }, {
            name: 'shower',
            version: 7,
            popularity: 1293,
            codepoint: 61537,
            unsupported_families: [],
            categories: ['search'],
            tags: ['bath', 'bathroom', 'closet', 'home', 'house', 'place', 'plumbing', 'room', 'shower', 'sprinkler', 'wash', 'water', 'wc'],
            sizes_px: [24]
        }, {
            name: 'shuffle',
            version: 12,
            popularity: 1349,
            codepoint: 57411,
            unsupported_families: [],
            categories: ['av'],
            tags: ['arrow', 'arrows', 'control', 'controls', 'music', 'random', 'shuffle', 'video'],
            sizes_px: [24]
        }, {
            name: 'shuffle_on',
            version: 10,
            popularity: 360,
            codepoint: 59873,
            unsupported_families: [],
            categories: ['av'],
            tags: ['arrow', 'arrows', 'control', 'controls', 'music', 'on', 'random', 'shuffle', 'video'],
            sizes_px: [24]
        }, {
            name: 'shutter_speed',
            version: 9,
            popularity: 385,
            codepoint: 58429,
            unsupported_families: [],
            categories: ['image'],
            tags: ['aperture', 'camera', 'duration', 'image', 'lens', 'photo', 'photography', 'photos', 'picture', 'setting', 'shutter', 'speed', 'stop', 'time', 'timer', 'watch'],
            sizes_px: [24]
        }, {
            name: 'sick',
            version: 4,
            popularity: 821,
            codepoint: 61984,
            unsupported_families: [],
            categories: ['social'],
            tags: ['covid', 'discomfort', 'emotions', 'expressions', 'face', 'feelings', 'fever', 'flu', 'ill', 'mood', 'pain', 'person', 'sick', 'survey', 'upset'],
            sizes_px: [24]
        }, {
            name: 'signal_cellular_0_bar',
            version: 13,
            popularity: 269,
            codepoint: 61608,
            unsupported_families: [],
            categories: ['device'],
            tags: ['0', 'bar', 'cell', 'cellular', 'data', 'internet', 'mobile', 'network', 'phone', 'signal', 'speed', 'wifi', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'signal_cellular_4_bar',
            version: 10,
            popularity: 705,
            codepoint: 57800,
            unsupported_families: [],
            categories: ['device'],
            tags: ['4', 'bar', 'cell', 'cellular', 'data', 'internet', 'mobile', 'network', 'phone', 'signal', 'speed', 'wifi', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'signal_cellular_alt',
            version: 10,
            popularity: 3081,
            codepoint: 57858,
            unsupported_families: [],
            categories: ['device'],
            tags: ['alt', 'analytics', 'bar', 'cell', 'cellular', 'chart', 'data', 'diagram', 'graph', 'infographic', 'internet', 'measure', 'metrics', 'mobile', 'network', 'phone', 'signal', 'statistics', 'tracking', 'wifi', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'signal_cellular_connected_no_internet_0_bar',
            version: 11,
            popularity: 184,
            codepoint: 61612,
            unsupported_families: [],
            categories: ['device'],
            tags: ['!', '0', 'alert', 'attention', 'bar', 'caution', 'cell', 'cellular', 'connected', 'danger', 'data', 'error', 'exclamation', 'important', 'internet', 'mark', 'mobile', 'network', 'no', 'notification', 'phone', 'signal', 'symbol', 'warning', 'wifi', 'wireless'],
            sizes_px: [20, 24]
        }, {
            name: 'signal_cellular_connected_no_internet_4_bar',
            version: 11,
            popularity: 199,
            codepoint: 57805,
            unsupported_families: [],
            categories: ['device'],
            tags: ['!', '4', 'alert', 'attention', 'bar', 'caution', 'cell', 'cellular', 'connected', 'danger', 'data', 'error', 'exclamation', 'important', 'internet', 'mark', 'mobile', 'network', 'no', 'notification', 'phone', 'signal', 'symbol', 'warning', 'wifi', 'wireless'],
            sizes_px: [20, 24]
        }, {
            name: 'signal_cellular_no_sim',
            version: 9,
            popularity: 137,
            codepoint: 57806,
            unsupported_families: [],
            categories: ['device'],
            tags: ['camera', 'card', 'cellular', 'chip', 'device', 'disabled', 'enabled', 'memory', 'no', 'off', 'offline', 'on', 'phone', 'signal', 'sim', 'slash', 'storage'],
            sizes_px: [24]
        }, {
            name: 'signal_cellular_nodata',
            version: 8,
            popularity: 163,
            codepoint: 61538,
            unsupported_families: [],
            categories: ['device'],
            tags: ['cell', 'cellular', 'data', 'internet', 'mobile', 'network', 'no', 'nodata', 'offline', 'phone', 'quit', 'signal', 'wifi', 'wireless', 'x'],
            sizes_px: [24]
        }, {
            name: 'signal_cellular_null',
            version: 10,
            popularity: 158,
            codepoint: 57807,
            unsupported_families: [],
            categories: ['device'],
            tags: ['cell', 'cellular', 'data', 'internet', 'mobile', 'network', 'null', 'phone', 'signal', 'wifi', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'signal_cellular_off',
            version: 10,
            popularity: 167,
            codepoint: 57808,
            unsupported_families: [],
            categories: ['device'],
            tags: ['cell', 'cellular', 'data', 'disabled', 'enabled', 'internet', 'mobile', 'network', 'off', 'offline', 'on', 'phone', 'signal', 'slash', 'wifi', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'signal_wifi_0_bar',
            version: 13,
            popularity: 372,
            codepoint: 61616,
            unsupported_families: [],
            categories: ['device'],
            tags: ['0', 'bar', 'cell', 'cellular', 'data', 'internet', 'mobile', 'network', 'phone', 'signal', 'wifi', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'signal_wifi_4_bar',
            version: 10,
            popularity: 814,
            codepoint: 57816,
            unsupported_families: [],
            categories: ['device'],
            tags: ['4', 'bar', 'cell', 'cellular', 'data', 'internet', 'mobile', 'network', 'phone', 'signal', 'wifi', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'signal_wifi_4_bar_lock',
            version: 11,
            popularity: 211,
            codepoint: 57817,
            unsupported_families: [],
            categories: ['device'],
            tags: ['4', 'bar', 'cell', 'cellular', 'data', 'internet', 'lock', 'locked', 'mobile', 'network', 'password', 'phone', 'privacy', 'private', 'protection', 'safety', 'secure', 'security', 'signal', 'wifi', 'wireless'],
            sizes_px: [20, 24]
        }, {
            name: 'signal_wifi_bad',
            version: 8,
            popularity: 314,
            codepoint: 61539,
            unsupported_families: [],
            categories: ['device'],
            tags: ['bad', 'bar', 'cancel', 'cell', 'cellular', 'close', 'data', 'exit', 'internet', 'mobile', 'network', 'no', 'phone', 'quit', 'remove', 'signal', 'stop', 'wifi', 'wireless', 'x'],
            sizes_px: [24]
        }, {
            name: 'signal_wifi_connected_no_internet_4',
            version: 8,
            popularity: 278,
            codepoint: 61540,
            unsupported_families: [],
            categories: ['device'],
            tags: ['4', 'cell', 'cellular', 'connected', 'data', 'internet', 'mobile', 'network', 'no', 'offline', 'phone', 'signal', 'wifi', 'wireless', 'x'],
            sizes_px: [24]
        }, {
            name: 'signal_wifi_off',
            version: 12,
            popularity: 314,
            codepoint: 57818,
            unsupported_families: [],
            categories: ['device'],
            tags: ['cell', 'cellular', 'data', 'disabled', 'enabled', 'internet', 'mobile', 'network', 'off', 'on', 'phone', 'signal', 'slash', 'speed', 'wifi', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'signal_wifi_statusbar_4_bar',
            version: 7,
            popularity: 553,
            codepoint: 61541,
            unsupported_families: [],
            categories: ['device'],
            tags: ['4', 'bar', 'cell', 'cellular', 'data', 'internet', 'mobile', 'network', 'phone', 'signal', 'speed', 'statusbar', 'wifi', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'signal_wifi_statusbar_connected_no_internet_4',
            version: 9,
            popularity: 452,
            codepoint: 61542,
            unsupported_families: [],
            categories: ['device'],
            tags: ['!', '4', 'alert', 'attention', 'caution', 'cell', 'cellular', 'connected', 'danger', 'data', 'error', 'exclamation', 'important', 'internet', 'mark', 'mobile', 'network', 'no', 'notification', 'phone', 'signal', 'speed', 'statusbar', 'symbol', 'warning', 'wifi', 'wireless'],
            sizes_px: [20, 24]
        }, {
            name: 'signal_wifi_statusbar_null',
            version: 7,
            popularity: 240,
            codepoint: 61543,
            unsupported_families: [],
            categories: ['device'],
            tags: ['cell', 'cellular', 'data', 'internet', 'mobile', 'network', 'null', 'phone', 'signal', 'speed', 'statusbar', 'wifi', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'sim_card',
            version: 10,
            popularity: 412,
            codepoint: 58155,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['camera', 'card', 'chip', 'device', 'memory', 'phone', 'sim', 'storage'],
            sizes_px: [24]
        }, {
            name: 'sim_card_alert',
            version: 9,
            popularity: 166,
            codepoint: 58916,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['!', 'alert', 'attention', 'camera', 'card', 'caution', 'danger', 'digital', 'error', 'exclamation', 'important', 'mark', 'memory', 'notification', 'photos', 'sd', 'secure', 'storage', 'symbol', 'warning'],
            sizes_px: [24]
        }, {
            name: 'sim_card_download',
            version: 7,
            popularity: 465,
            codepoint: 61544,
            unsupported_families: [],
            categories: ['device'],
            tags: ['arrow', 'camera', 'card', 'chip', 'device', 'down', 'download', 'memory', 'phone', 'sim', 'storage'],
            sizes_px: [24]
        }, {
            name: 'single_bed',
            version: 9,
            popularity: 509,
            codepoint: 59976,
            unsupported_families: [],
            categories: ['social'],
            tags: ['bed', 'bedroom', 'double', 'furniture', 'home', 'hotel', 'house', 'king', 'night', 'pillows', 'queen', 'rest', 'room', 'single', 'sleep', 'twin'],
            sizes_px: [20, 24]
        }, {
            name: 'sip',
            version: 8,
            popularity: 253,
            codepoint: 61545,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['alphabet', 'call', 'character', 'dialer', 'font', 'initiation', 'internet', 'letter', 'over', 'phone', 'protocol', 'routing', 'session', 'sip', 'symbol', 'text', 'type', 'voice'],
            sizes_px: [24]
        }, {
            name: 'skateboarding',
            version: 2,
            popularity: 532,
            codepoint: 58641,
            unsupported_families: [],
            categories: ['social'],
            tags: ['athlete', 'athletic', 'body', 'entertainment', 'exercise', 'hobby', 'human', 'people', 'person', 'skate', 'skateboarder', 'skateboarding', 'social', 'sports'],
            sizes_px: [20, 24]
        }, {
            name: 'skip_next',
            version: 11,
            popularity: 3413,
            codepoint: 57412,
            unsupported_families: [],
            categories: ['av'],
            tags: ['arrow', 'control', 'controls', 'forward', 'music', 'next', 'play', 'previous', 'skip', 'transport', 'video'],
            sizes_px: [24]
        }, {
            name: 'skip_previous',
            version: 11,
            popularity: 2552,
            codepoint: 57413,
            unsupported_families: [],
            categories: ['av'],
            tags: ['arrow', 'backward', 'control', 'controls', 'music', 'next', 'play', 'previous', 'skip', 'transport', 'video'],
            sizes_px: [24]
        }, {
            name: 'sledding',
            version: 3,
            popularity: 302,
            codepoint: 58642,
            unsupported_families: [],
            categories: ['social'],
            tags: ['athlete', 'athletic', 'body', 'entertainment', 'exercise', 'hobby', 'human', 'people', 'person', 'sled', 'sledding', 'sledge', 'snow', 'social', 'sports', 'travel', 'winter'],
            sizes_px: [20, 24]
        }, {
            name: 'slideshow',
            version: 10,
            popularity: 994,
            codepoint: 58395,
            unsupported_families: [],
            categories: ['image'],
            tags: ['movie', 'photos', 'play', 'slideshow', 'square', 'video', 'view'],
            sizes_px: [24]
        }, {
            name: 'slow_motion_video',
            version: 9,
            popularity: 444,
            codepoint: 57448,
            unsupported_families: [],
            categories: ['av'],
            tags: ['arrow', 'control', 'controls', 'motion', 'music', 'play', 'slow', 'speed', 'video'],
            sizes_px: [24]
        }, {
            name: 'smart_button',
            version: 5,
            popularity: 873,
            codepoint: 61889,
            unsupported_families: [],
            categories: ['action'],
            tags: ['action', 'auto', 'button', 'components', 'composer', 'function', 'interface', 'site', 'smart', 'special', 'stars', 'ui', 'ux', 'web', 'website'],
            sizes_px: [24]
        }, {
            name: 'smart_display',
            version: 7,
            popularity: 2720,
            codepoint: 61546,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['airplay', 'cast', 'chrome', 'connect', 'device', 'display', 'play', 'screen', 'screencast', 'smart', 'stream', 'television', 'tv', 'video', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'smart_screen',
            version: 7,
            popularity: 204,
            codepoint: 61547,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['Android', 'OS', 'airplay', 'cast', 'cell', 'connect', 'device', 'hardware', 'iOS', 'mobile', 'phone', 'screen', 'screencast', 'smart', 'stream', 'tablet', 'video'],
            sizes_px: [24]
        }, {
            name: 'smart_toy',
            version: 7,
            popularity: 2108,
            codepoint: 61548,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['games', 'robot', 'smart', 'toy'],
            sizes_px: [24]
        }, {
            name: 'smartphone',
            version: 11,
            popularity: 5033,
            codepoint: 58156,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['Android', 'OS', 'call', 'cell', 'chat', 'device', 'hardware', 'iOS', 'mobile', 'phone', 'smartphone', 'tablet', 'text'],
            sizes_px: [24]
        }, {
            name: 'smoke_free',
            version: 10,
            popularity: 324,
            codepoint: 60234,
            unsupported_families: [],
            categories: ['places'],
            tags: ['cigarette', 'disabled', 'enabled', 'free', 'never', 'no', 'off', 'on', 'places', 'prohibited', 'slash', 'smoke', 'smoking', 'tobacco', 'warning', 'zone'],
            sizes_px: [24]
        }, {
            name: 'smoking_rooms',
            version: 10,
            popularity: 404,
            codepoint: 60235,
            unsupported_families: [],
            categories: ['places'],
            tags: ['allowed', 'cigarette', 'places', 'rooms', 'smoke', 'smoking', 'tobacco', 'zone'],
            sizes_px: [24]
        }, {
            name: 'sms',
            version: 10,
            popularity: 2220,
            codepoint: 58917,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['3', 'bubble', 'chat', 'communication', 'conversation', 'dots', 'message', 'more', 'service', 'sms', 'speech', 'three'],
            sizes_px: [24]
        }, {
            name: 'sms_failed',
            version: 11,
            popularity: 506,
            codepoint: 58918,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['!', 'alert', 'attention', 'bubbles', 'caution', 'chat', 'communication', 'conversation', 'danger', 'error', 'exclamation', 'failed', 'important', 'mark', 'message', 'notification', 'service', 'sms', 'speech', 'symbol', 'warning'],
            sizes_px: [24]
        }, {
            name: 'snippet_folder',
            version: 5,
            popularity: 486,
            codepoint: 61895,
            unsupported_families: [],
            categories: ['file'],
            tags: ['data', 'doc', 'document', 'drive', 'file', 'folder', 'sheet', 'slide', 'snippet', 'storage'],
            sizes_px: [24]
        }, {
            name: 'snooze',
            version: 10,
            popularity: 325,
            codepoint: 57414,
            unsupported_families: [],
            categories: ['av'],
            tags: ['alarm', 'bell', 'clock', 'duration', 'notification', 'snooze', 'time', 'timer', 'watch', 'z'],
            sizes_px: [24]
        }, {
            name: 'snowboarding',
            version: 2,
            popularity: 374,
            codepoint: 58643,
            unsupported_families: [],
            categories: ['social'],
            tags: ['athlete', 'athletic', 'body', 'entertainment', 'exercise', 'hobby', 'human', 'people', 'person', 'snow', 'snowboarding', 'social', 'sports', 'travel', 'winter'],
            sizes_px: [20, 24]
        }, {
            name: 'snowmobile',
            version: 2,
            popularity: 201,
            codepoint: 58627,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['automobile', 'car', 'direction', 'skimobile', 'snow', 'snowmobile', 'social', 'sports', 'transportation', 'travel', 'vehicle', 'winter'],
            sizes_px: [20, 24]
        }, {
            name: 'snowshoeing',
            version: 2,
            popularity: 331,
            codepoint: 58644,
            unsupported_families: [],
            categories: ['social'],
            tags: ['body', 'human', 'people', 'person', 'snow', 'snowshoe', 'snowshoeing', 'sports', 'travel', 'winter'],
            sizes_px: [20, 24]
        }, {
            name: 'soap',
            version: 6,
            popularity: 373,
            codepoint: 61874,
            unsupported_families: [],
            categories: ['places'],
            tags: ['bathroom', 'clean', 'fingers', 'gesture', 'hand', 'soap', 'wash', 'wc'],
            sizes_px: [24]
        }, {
            name: 'social_distance',
            version: 5,
            popularity: 822,
            codepoint: 57803,
            unsupported_families: [],
            categories: ['social'],
            tags: ['6', 'apart', 'body', 'distance', 'ft', 'human', 'people', 'person', 'social', 'space'],
            sizes_px: [24]
        }, {
            name: 'sort',
            version: 11,
            popularity: 5044,
            codepoint: 57700,
            unsupported_families: [],
            categories: ['content'],
            tags: ['filter', 'find', 'lines', 'list', 'organize', 'sort'],
            sizes_px: [24]
        }, {
            name: 'sort_by_alpha',
            version: 9,
            popularity: 1242,
            codepoint: 57427,
            unsupported_families: [],
            categories: ['av'],
            tags: ['alphabet', 'alphabetize', 'az', 'by alpha', 'character', 'font', 'letter', 'list', 'order', 'organize', 'sort', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'source',
            version: 5,
            popularity: 2600,
            codepoint: 61892,
            unsupported_families: [],
            categories: ['action'],
            tags: ['code', 'composer', 'content', 'creation', 'data', 'doc', 'document', 'file', 'folder', 'mode', 'source', 'storage', 'view'],
            sizes_px: [24]
        }, {
            name: 'south',
            version: 5,
            popularity: 2342,
            codepoint: 61923,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['arrow', 'directional', 'down', 'maps', 'navigation', 'south'],
            sizes_px: [24]
        }, {
            name: 'south_east',
            version: 5,
            popularity: 683,
            codepoint: 61924,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['arrow', 'directional', 'down', 'east', 'maps', 'navigation', 'right', 'south'],
            sizes_px: [24]
        }, {
            name: 'south_west',
            version: 5,
            popularity: 586,
            codepoint: 61925,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['arrow', 'directional', 'down', 'left', 'maps', 'navigation', 'south', 'west'],
            sizes_px: [24]
        }, {
            name: 'spa',
            version: 10,
            popularity: 2474,
            codepoint: 60236,
            unsupported_families: [],
            categories: ['places'],
            tags: ['aromatherapy', 'flower', 'healthcare', 'leaf', 'massage', 'meditation', 'nature', 'petals', 'places', 'relax', 'spa', 'wellbeing', 'wellness'],
            sizes_px: [24]
        }, {
            name: 'space_bar',
            version: 9,
            popularity: 253,
            codepoint: 57942,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['bar', 'keyboard', 'line', 'space'],
            sizes_px: [24]
        }, {
            name: 'space_dashboard',
            version: 1,
            popularity: 3032,
            codepoint: 58987,
            unsupported_families: [],
            categories: ['action'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'speaker',
            version: 11,
            popularity: 536,
            codepoint: 58157,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['box', 'electronic', 'loud', 'music', 'sound', 'speaker', 'stereo', 'system', 'video'],
            sizes_px: [24]
        }, {
            name: 'speaker_group',
            version: 10,
            popularity: 278,
            codepoint: 58158,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['box', 'electronic', 'group', 'loud', 'multiple', 'music', 'sound', 'speaker', 'stereo', 'system', 'video'],
            sizes_px: [24]
        }, {
            name: 'speaker_notes',
            version: 11,
            popularity: 1851,
            codepoint: 59597,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bubble', 'chat', 'comment', 'communicate', 'format', 'list', 'message', 'notes', 'speaker', 'speech', 'text'],
            sizes_px: [24]
        }, {
            name: 'speaker_notes_off',
            version: 11,
            popularity: 525,
            codepoint: 59690,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bubble', 'chat', 'comment', 'communicate', 'disabled', 'enabled', 'format', 'list', 'message', 'notes', 'off', 'on', 'slash', 'speaker', 'speech', 'text'],
            sizes_px: [24]
        }, {
            name: 'speaker_phone',
            version: 13,
            popularity: 335,
            codepoint: 57554,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['Android', 'OS', 'cell', 'device', 'hardware', 'iOS', 'mobile', 'phone', 'sound', 'speaker', 'tablet', 'volume'],
            sizes_px: [24]
        }, {
            name: 'speed',
            version: 10,
            popularity: 3250,
            codepoint: 59876,
            unsupported_families: [],
            categories: ['av'],
            tags: ['arrow', 'control', 'controls', 'fast', 'gauge', 'meter', 'motion', 'music', 'slow', 'speed', 'speedometer', 'velocity', 'video'],
            sizes_px: [24]
        }, {
            name: 'spellcheck',
            version: 10,
            popularity: 708,
            codepoint: 59598,
            unsupported_families: [],
            categories: ['action'],
            tags: ['a', 'alphabet', 'approve', 'character', 'check', 'font', 'letter', 'mark', 'ok', 'processor', 'select', 'spell', 'spellcheck', 'symbol', 'text', 'tick', 'type', 'word', 'write', 'yes'],
            sizes_px: [24]
        }, {
            name: 'splitscreen',
            version: 9,
            popularity: 538,
            codepoint: 61549,
            unsupported_families: [],
            categories: ['device'],
            tags: ['grid', 'layout', 'multitasking', 'screen', 'split', 'splitscreen', 'two'],
            sizes_px: [24]
        }, {
            name: 'sports',
            version: 9,
            popularity: 835,
            codepoint: 59952,
            unsupported_families: [],
            categories: ['social'],
            tags: ['athlete', 'athletic', 'ball', 'basketball', 'blowing', 'coach', 'entertainment', 'exercise', 'game', 'hobby', 'instrument', 'live', 'referee', 'soccer', 'social', 'sound', 'sports', 'trophy', 'warning', 'whistle'],
            sizes_px: [20, 24]
        }, {
            name: 'sports_bar',
            version: 4,
            popularity: 867,
            codepoint: 61939,
            unsupported_families: [],
            categories: ['places'],
            tags: ['alcohol', 'bar', 'beer', 'drink', 'liquor', 'pint', 'places', 'pub', 'sports'],
            sizes_px: [24]
        }, {
            name: 'sports_baseball',
            version: 9,
            popularity: 608,
            codepoint: 59985,
            unsupported_families: [],
            categories: ['social'],
            tags: ['athlete', 'athletic', 'ball', 'baseball', 'entertainment', 'exercise', 'game', 'hobby', 'social', 'sports'],
            sizes_px: [20, 24]
        }, {
            name: 'sports_basketball',
            version: 9,
            popularity: 965,
            codepoint: 59942,
            unsupported_families: [],
            categories: ['social'],
            tags: ['athlete', 'athletic', 'ball', 'basketball', 'entertainment', 'exercise', 'game', 'hobby', 'social', 'sports'],
            sizes_px: [20, 24]
        }, {
            name: 'sports_cricket',
            version: 9,
            popularity: 376,
            codepoint: 59943,
            unsupported_families: [],
            categories: ['social'],
            tags: ['athlete', 'athletic', 'ball', 'bat', 'cricket', 'entertainment', 'exercise', 'game', 'hobby', 'social', 'sports'],
            sizes_px: [20, 24]
        }, {
            name: 'sports_esports',
            version: 9,
            popularity: 3101,
            codepoint: 59944,
            unsupported_families: [],
            categories: ['social'],
            tags: ['controller', 'entertainment', 'esports', 'game', 'gamepad', 'gaming', 'hobby', 'online', 'social', 'sports', 'video'],
            sizes_px: [20, 24]
        }, {
            name: 'sports_football',
            version: 10,
            popularity: 502,
            codepoint: 59945,
            unsupported_families: [],
            categories: ['social'],
            tags: ['athlete', 'athletic', 'ball', 'entertainment', 'exercise', 'football', 'game', 'hobby', 'social', 'sports'],
            sizes_px: [20, 24]
        }, {
            name: 'sports_golf',
            version: 9,
            popularity: 384,
            codepoint: 59946,
            unsupported_families: [],
            categories: ['social'],
            tags: ['athlete', 'athletic', 'ball', 'club', 'entertainment', 'exercise', 'game', 'golf', 'golfer', 'golfing', 'hobby', 'social', 'sports'],
            sizes_px: [20, 24]
        }, {
            name: 'sports_handball',
            version: 9,
            popularity: 551,
            codepoint: 59955,
            unsupported_families: [],
            categories: ['social'],
            tags: ['athlete', 'athletic', 'ball', 'body', 'entertainment', 'exercise', 'game', 'handball', 'hobby', 'human', 'people', 'person', 'social', 'sports'],
            sizes_px: [20, 24]
        }, {
            name: 'sports_hockey',
            version: 9,
            popularity: 311,
            codepoint: 59947,
            unsupported_families: [],
            categories: ['social'],
            tags: ['athlete', 'athletic', 'entertainment', 'exercise', 'game', 'hobby', 'hockey', 'social', 'sports', 'sticks'],
            sizes_px: [20, 24]
        }, {
            name: 'sports_kabaddi',
            version: 9,
            popularity: 944,
            codepoint: 59956,
            unsupported_families: [],
            categories: ['social'],
            tags: ['athlete', 'athletic', 'body', 'combat', 'entertainment', 'exercise', 'fighting', 'game', 'hobby', 'human', 'kabaddi', 'people', 'person', 'social', 'sports', 'wrestle', 'wrestling'],
            sizes_px: [20, 24]
        }, {
            name: 'sports_mma',
            version: 9,
            popularity: 373,
            codepoint: 59948,
            unsupported_families: [],
            categories: ['social'],
            tags: ['arts', 'athlete', 'athletic', 'boxing', 'combat', 'entertainment', 'exercise', 'fighting', 'game', 'glove', 'hobby', 'martial', 'mixed', 'mma', 'social', 'sports'],
            sizes_px: [20, 24]
        }, {
            name: 'sports_motorsports',
            version: 9,
            popularity: 602,
            codepoint: 59949,
            unsupported_families: [],
            categories: ['social'],
            tags: ['athlete', 'athletic', 'automobile', 'bike', 'drive', 'driving', 'entertainment', 'helmet', 'hobby', 'motorcycle', 'motorsports', 'protect', 'social', 'sports', 'vehicle'],
            sizes_px: [20, 24]
        }, {
            name: 'sports_rugby',
            version: 9,
            popularity: 321,
            codepoint: 59950,
            unsupported_families: [],
            categories: ['social'],
            tags: ['athlete', 'athletic', 'ball', 'entertainment', 'exercise', 'game', 'hobby', 'rugby', 'social', 'sports'],
            sizes_px: [20, 24]
        }, {
            name: 'sports_score',
            version: 8,
            popularity: 1123,
            codepoint: 61550,
            unsupported_families: [],
            categories: ['device'],
            tags: ['destination', 'flag', 'goal', 'score', 'sports'],
            sizes_px: [24]
        }, {
            name: 'sports_soccer',
            version: 9,
            popularity: 1850,
            codepoint: 59951,
            unsupported_families: [],
            categories: ['social'],
            tags: ['athlete', 'athletic', 'ball', 'entertainment', 'exercise', 'football', 'game', 'hobby', 'soccer', 'social', 'sports'],
            sizes_px: [20, 24]
        }, {
            name: 'sports_tennis',
            version: 9,
            popularity: 781,
            codepoint: 59954,
            unsupported_families: [],
            categories: ['social'],
            tags: ['athlete', 'athletic', 'ball', 'bat', 'entertainment', 'exercise', 'game', 'hobby', 'racket', 'social', 'sports', 'tennis'],
            sizes_px: [20, 24]
        }, {
            name: 'sports_volleyball',
            version: 9,
            popularity: 516,
            codepoint: 59953,
            unsupported_families: [],
            categories: ['social'],
            tags: ['athlete', 'athletic', 'ball', 'entertainment', 'exercise', 'game', 'hobby', 'social', 'sports', 'volleyball'],
            sizes_px: [20, 24]
        }, {
            name: 'square_foot',
            version: 9,
            popularity: 1341,
            codepoint: 59977,
            unsupported_families: [],
            categories: ['content'],
            tags: ['construction', 'feet', 'foot', 'inches', 'length', 'measurement', 'ruler', 'school', 'set', 'square', 'tools'],
            sizes_px: [20, 24]
        }, {
            name: 'stacked_bar_chart',
            version: 9,
            popularity: 1539,
            codepoint: 59878,
            unsupported_families: [],
            categories: ['content'],
            tags: ['analytics', 'bar', 'chart-chart', 'data', 'diagram', 'graph', 'infographic', 'measure', 'metrics', 'stacked', 'statistics', 'tracking'],
            sizes_px: [24]
        }, {
            name: 'stacked_line_chart',
            version: 4,
            popularity: 878,
            codepoint: 61995,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['analytics', 'chart', 'data', 'diagram', 'graph', 'infographic', 'line', 'measure', 'metrics', 'stacked', 'statistics', 'tracking'],
            sizes_px: [24]
        }, {
            name: 'stairs',
            version: 6,
            popularity: 466,
            codepoint: 61865,
            unsupported_families: [],
            categories: ['places'],
            tags: ['down', 'staircase', 'stairs', 'up'],
            sizes_px: [24]
        }, {
            name: 'star',
            version: 15,
            popularity: 13546,
            codepoint: 59448,
            unsupported_families: [],
            categories: ['toggle'],
            tags: ['best', 'bookmark', 'favorite', 'highlight', 'ranking', 'rate', 'rating', 'save', 'star', 'toggle'],
            sizes_px: [24]
        }, {
            name: 'star_border',
            version: 14,
            popularity: 5694,
            codepoint: 59450,
            unsupported_families: [],
            categories: ['toggle'],
            tags: ['best', 'bookmark', 'border', 'favorite', 'highlight', 'outline', 'ranking', 'rate', 'rating', 'save', 'star', 'toggle'],
            sizes_px: [24]
        }, {
            name: 'star_border_purple500',
            version: 8,
            popularity: 967,
            codepoint: 61593,
            unsupported_families: [],
            categories: ['toggle'],
            tags: ['500', 'best', 'bookmark', 'border', 'favorite', 'highlight', 'outline', 'purple', 'ranking', 'rate', 'rating', 'save', 'star', 'toggle'],
            sizes_px: [24]
        }, {
            name: 'star_half',
            version: 17,
            popularity: 2066,
            codepoint: 59449,
            unsupported_families: [],
            categories: ['toggle'],
            tags: ['0.5', '1/2', 'achievement', 'bookmark', 'favorite', 'half', 'highlight', 'important', 'marked', 'ranking', 'rate', 'rating', 'rating rank', 'reward', 'save', 'saved', 'shape', 'special', 'star', 'toggle'],
            sizes_px: [24]
        }, {
            name: 'star_outline',
            version: 9,
            popularity: 3858,
            codepoint: 61551,
            unsupported_families: [],
            categories: ['toggle'],
            tags: ['bookmark', 'favorite', 'half', 'highlight', 'ranking', 'rate', 'rating', 'save', 'star', 'toggle'],
            sizes_px: [24]
        }, {
            name: 'star_purple500',
            version: 8,
            popularity: 1317,
            codepoint: 61594,
            unsupported_families: [],
            categories: ['toggle'],
            tags: ['500', 'best', 'bookmark', 'favorite', 'highlight', 'purple', 'ranking', 'rate', 'rating', 'save', 'star', 'toggle'],
            sizes_px: [24]
        }, {
            name: 'star_rate',
            version: 10,
            popularity: 9804,
            codepoint: 61676,
            unsupported_families: [],
            categories: ['action'],
            tags: ['achievement', 'bookmark', 'favorite', 'highlight', 'important', 'marked', 'ranking', 'rate', 'rating rank', 'reward', 'save', 'saved', 'shape', 'special', 'star'],
            sizes_px: [24]
        }, {
            name: 'stars',
            version: 10,
            popularity: 4114,
            codepoint: 59600,
            unsupported_families: [],
            categories: ['action'],
            tags: ['achievement', 'bookmark', 'circle', 'favorite', 'highlight', 'important', 'marked', 'ranking', 'rate', 'rating rank', 'reward', 'save', 'saved', 'shape', 'special', 'star'],
            sizes_px: [24]
        }, {
            name: 'stay_current_landscape',
            version: 10,
            popularity: 243,
            codepoint: 57555,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['Android', 'OS', 'current', 'device', 'hardware', 'iOS', 'landscape', 'mobile', 'phone', 'stay', 'tablet'],
            sizes_px: [24]
        }, {
            name: 'stay_current_portrait',
            version: 10,
            popularity: 670,
            codepoint: 57556,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['Android', 'OS', 'current', 'device', 'hardware', 'iOS', 'mobile', 'phone', 'portrait', 'stay', 'tablet'],
            sizes_px: [24]
        }, {
            name: 'stay_primary_landscape',
            version: 10,
            popularity: 223,
            codepoint: 57557,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['Android', 'OS', 'current', 'device', 'hardware', 'iOS', 'landscape', 'mobile', 'phone', 'primary', 'stay', 'tablet'],
            sizes_px: [24]
        }, {
            name: 'stay_primary_portrait',
            version: 10,
            popularity: 502,
            codepoint: 57558,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['Android', 'OS', 'current', 'device', 'hardware', 'iOS', 'mobile', 'phone', 'portrait', 'primary', 'stay', 'tablet'],
            sizes_px: [24]
        }, {
            name: 'sticky_note_2',
            version: 5,
            popularity: 2748,
            codepoint: 61948,
            unsupported_families: [],
            categories: ['action'],
            tags: ['2', 'bookmark', 'mark', 'message', 'note', 'paper', 'sticky', 'text', 'writing'],
            sizes_px: [24]
        }, {
            name: 'stop',
            version: 10,
            popularity: 3347,
            codepoint: 57415,
            unsupported_families: [],
            categories: ['av'],
            tags: ['control', 'controls', 'music', 'pause', 'play', 'player', 'square', 'stop', 'video'],
            sizes_px: [24]
        }, {
            name: 'stop_circle',
            version: 12,
            popularity: 1492,
            codepoint: 61297,
            unsupported_families: [],
            categories: ['av'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'stop_screen_share',
            version: 11,
            popularity: 282,
            codepoint: 57571,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['Android', 'OS', 'arrow', 'cast', 'chrome', 'device', 'disabled', 'display', 'enabled', 'hardware', 'iOS', 'laptop', 'mac', 'mirror', 'monitor', 'off', 'offline', 'on', 'screen', 'share', 'slash', 'steam', 'stop', 'streaming', 'web', 'window'],
            sizes_px: [24]
        }, {
            name: 'storage',
            version: 11,
            popularity: 2488,
            codepoint: 57819,
            unsupported_families: [],
            categories: ['device'],
            tags: ['computer', 'data', 'drive', 'memory', 'storage'],
            sizes_px: [24]
        }, {
            name: 'store',
            version: 9,
            popularity: 6944,
            codepoint: 59601,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bill', 'building', 'business', 'card', 'cash', 'coin', 'commerce', 'company', 'credit', 'currency', 'dollars', 'market', 'money', 'online', 'pay', 'payment', 'shop', 'shopping', 'store', 'storefront'],
            sizes_px: [24]
        }, {
            name: 'store_mall_directory',
            version: 10,
            popularity: 646,
            codepoint: 58723,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['directory', 'mall', 'store'],
            sizes_px: [24]
        }, {
            name: 'storefront',
            version: 15,
            popularity: 5351,
            codepoint: 59922,
            unsupported_families: [],
            categories: ['places'],
            tags: ['business', 'buy', 'cafe', 'commerce', 'front', 'market', 'places', 'restaurant', 'retail', 'sell', 'shop', 'shopping', 'store', 'storefront'],
            sizes_px: [24]
        }, {
            name: 'storm',
            version: 8,
            popularity: 412,
            codepoint: 61552,
            unsupported_families: [],
            categories: ['device'],
            tags: ['forecast', 'hurricane', 'storm', 'temperature', 'twister', 'weather', 'wind'],
            sizes_px: [24]
        }, {
            name: 'straighten',
            version: 10,
            popularity: 1427,
            codepoint: 58396,
            unsupported_families: [],
            categories: ['image'],
            tags: ['length', 'measure', 'measurement', 'ruler', 'size', 'straighten'],
            sizes_px: [24]
        }, {
            name: 'stream',
            version: 9,
            popularity: 1263,
            codepoint: 59881,
            unsupported_families: [],
            categories: ['content'],
            tags: ['cast', 'connected', 'feed', 'live', 'network', 'signal', 'stream', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'streetview',
            version: 10,
            popularity: 271,
            codepoint: 58734,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['maps', 'street', 'streetview', 'view'],
            sizes_px: [24]
        }, {
            name: 'strikethrough_s',
            version: 12,
            popularity: 362,
            codepoint: 57943,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['alphabet', 'character', 'cross', 'doc', 'edit', 'editing', 'editor', 'font', 'letter', 'out', 's', 'sheet', 'spreadsheet', 'strikethrough', 'styles', 'symbol', 'text', 'type', 'writing'],
            sizes_px: [24]
        }, {
            name: 'stroller',
            version: 6,
            popularity: 187,
            codepoint: 61870,
            unsupported_families: [],
            categories: ['places'],
            tags: ['baby', 'care', 'carriage', 'child', 'children', 'infant', 'kid', 'newborn', 'stroller', 'toddler', 'young'],
            sizes_px: [24]
        }, {
            name: 'style',
            version: 10,
            popularity: 1590,
            codepoint: 58397,
            unsupported_families: [],
            categories: ['image'],
            tags: ['booklet', 'cards', 'filters', 'options', 'style', 'tags'],
            sizes_px: [24]
        }, {
            name: 'subdirectory_arrow_left',
            version: 9,
            popularity: 663,
            codepoint: 58841,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['arrow', 'directory', 'down', 'left', 'navigation', 'sub', 'subdirectory'],
            sizes_px: [24]
        }, {
            name: 'subdirectory_arrow_right',
            version: 9,
            popularity: 1345,
            codepoint: 58842,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['arrow', 'directory', 'down', 'navigation', 'right', 'sub', 'subdirectory'],
            sizes_px: [24]
        }, {
            name: 'subject',
            version: 11,
            popularity: 2319,
            codepoint: 59602,
            unsupported_families: [],
            categories: ['action'],
            tags: ['alignment', 'doc', 'document', 'email', 'full', 'justify', 'list', 'note', 'subject', 'text', 'writing'],
            sizes_px: [24]
        }, {
            name: 'subscript',
            version: 11,
            popularity: 197,
            codepoint: 61713,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['2', 'doc', 'edit', 'editing', 'editor', 'gmail', 'novitas', 'sheet', 'spreadsheet', 'style', 'subscript', 'symbol', 'text', 'writing', 'x'],
            sizes_px: [20, 24]
        }, {
            name: 'subscriptions',
            version: 9,
            popularity: 1375,
            codepoint: 57444,
            unsupported_families: [],
            categories: ['av'],
            tags: ['enroll', 'list', 'media', 'order', 'play', 'signup', 'subs', 'subscribe', 'subscriptions'],
            sizes_px: [24]
        }, {
            name: 'subtitles',
            version: 10,
            popularity: 934,
            codepoint: 57416,
            unsupported_families: [],
            categories: ['av'],
            tags: ['accessible', 'caption', 'cc', 'character', 'closed', 'decoder', 'language', 'media', 'movies', 'subtitle', 'subtitles', 'tv'],
            sizes_px: [24]
        }, {
            name: 'subtitles_off',
            version: 9,
            popularity: 447,
            codepoint: 61298,
            unsupported_families: [],
            categories: ['action'],
            tags: ['accessibility', 'accessible', 'caption', 'cc', 'closed', 'disabled', 'enabled', 'language', 'off', 'on', 'slash', 'subtitle', 'subtitles', 'translate', 'video'],
            sizes_px: [20, 24]
        }, {
            name: 'subway',
            version: 9,
            popularity: 365,
            codepoint: 58735,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['automobile', 'bike', 'car', 'cars', 'maps', 'rail', 'scooter', 'subway', 'train', 'transportation', 'travel', 'tunnel', 'underground', 'vehicle', 'vespa'],
            sizes_px: [24]
        }, {
            name: 'summarize',
            version: 8,
            popularity: 3702,
            codepoint: 61553,
            unsupported_families: [],
            categories: ['device'],
            tags: ['doc', 'document', 'list', 'menu', 'note', 'report', 'summary'],
            sizes_px: [24]
        }, {
            name: 'superscript',
            version: 10,
            popularity: 220,
            codepoint: 61714,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['2', 'doc', 'edit', 'editing', 'editor', 'gmail', 'novitas', 'sheet', 'spreadsheet', 'style', 'superscript', 'symbol', 'text', 'writing', 'x'],
            sizes_px: [20, 24]
        }, {
            name: 'supervised_user_circle',
            version: 10,
            popularity: 3705,
            codepoint: 59705,
            unsupported_families: [],
            categories: ['action'],
            tags: ['account', 'avatar', 'circle', 'control', 'face', 'human', 'parental', 'parents', 'people', 'person', 'profile', 'supervised', 'supervisor', 'user'],
            sizes_px: [24]
        }, {
            name: 'supervisor_account',
            version: 11,
            popularity: 5146,
            codepoint: 59603,
            unsupported_families: [],
            categories: ['action'],
            tags: ['account', 'avatar', 'control', 'face', 'human', 'parental', 'parental control', 'parents', 'people', 'person', 'profile', 'supervised', 'supervisor', 'user'],
            sizes_px: [24]
        }, {
            name: 'support',
            version: 9,
            popularity: 2750,
            codepoint: 61299,
            unsupported_families: [],
            categories: ['action'],
            tags: ['assist', 'buoy', 'help', 'life', 'lifebuoy', 'rescue', 'safe', 'safety', 'support'],
            sizes_px: [20, 24]
        }, {
            name: 'support_agent',
            version: 10,
            popularity: 7946,
            codepoint: 61666,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['agent', 'care', 'customer', 'face', 'headphone', 'person', 'representative', 'service', 'support'],
            sizes_px: [20, 24]
        }, {
            name: 'surfing',
            version: 2,
            popularity: 590,
            codepoint: 58645,
            unsupported_families: [],
            categories: ['social'],
            tags: ['athlete', 'athletic', 'beach', 'body', 'entertainment', 'exercise', 'hobby', 'human', 'people', 'person', 'sea', 'social sports', 'sports', 'summer', 'surfing', 'water'],
            sizes_px: [20, 24]
        }, {
            name: 'surround_sound',
            version: 11,
            popularity: 206,
            codepoint: 57417,
            unsupported_families: [],
            categories: ['av'],
            tags: ['circle', 'signal', 'sound', 'speaker', 'surround', 'system', 'volumn', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'swap_calls',
            version: 10,
            popularity: 449,
            codepoint: 57559,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['arrow', 'arrows', 'calls', 'device', 'direction', 'mobile', 'share', 'swap'],
            sizes_px: [24]
        }, {
            name: 'swap_horiz',
            version: 10,
            popularity: 3435,
            codepoint: 59604,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrow', 'arrows', 'back', 'forward', 'horizontal', 'swap'],
            sizes_px: [24]
        }, {
            name: 'swap_horizontal_circle',
            version: 10,
            popularity: 972,
            codepoint: 59699,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrow', 'arrows', 'back', 'circle', 'forward', 'horizontal', 'swap'],
            sizes_px: [24]
        }, {
            name: 'swap_vert',
            version: 10,
            popularity: 2299,
            codepoint: 59605,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrow', 'arrows', 'direction', 'down', 'navigation', 'swap', 'up', 'vert', 'vertical'],
            sizes_px: [24]
        }, {
            name: 'swap_vertical_circle',
            version: 11,
            popularity: 596,
            codepoint: 59606,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrow', 'arrows', 'circle', 'down', 'swap', 'up', 'vertical'],
            sizes_px: [24]
        }, {
            name: 'swipe',
            version: 10,
            popularity: 2046,
            codepoint: 59884,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrow', 'arrows', 'fingers', 'gesture', 'hand', 'hands', 'swipe', 'touch'],
            sizes_px: [20, 24]
        }, {
            name: 'switch_account',
            version: 9,
            popularity: 1090,
            codepoint: 59885,
            unsupported_families: [],
            categories: ['social'],
            tags: ['account', 'choices', 'face', 'human', 'multiple', 'options', 'people', 'person', 'profile', 'social', 'switch', 'user'],
            sizes_px: [24]
        }, {
            name: 'switch_camera',
            version: 10,
            popularity: 195,
            codepoint: 58398,
            unsupported_families: [],
            categories: ['image'],
            tags: ['arrow', 'arrows', 'camera', 'photo', 'photography', 'picture', 'switch'],
            sizes_px: [24]
        }, {
            name: 'switch_left',
            version: 6,
            popularity: 667,
            codepoint: 61905,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['arrows', 'directional', 'left', 'navigation', 'switch', 'toggle'],
            sizes_px: [24]
        }, {
            name: 'switch_right',
            version: 7,
            popularity: 591,
            codepoint: 61906,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['arrows', 'directional', 'navigation', 'right', 'switch', 'toggle'],
            sizes_px: [24]
        }, {
            name: 'switch_video',
            version: 10,
            popularity: 201,
            codepoint: 58399,
            unsupported_families: [],
            categories: ['image'],
            tags: ['arrow', 'arrows', 'camera', 'photography', 'switch', 'video', 'videos'],
            sizes_px: [24]
        }, {
            name: 'sync',
            version: 12,
            popularity: 3839,
            codepoint: 58919,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['360', 'around', 'arrow', 'arrows', 'direction', 'inprogress', 'load', 'loading refresh', 'renew', 'rotate', 'sync', 'turn'],
            sizes_px: [24]
        }, {
            name: 'sync_alt',
            version: 9,
            popularity: 3171,
            codepoint: 59928,
            unsupported_families: [],
            categories: ['action'],
            tags: ['alt', 'arrow', 'arrows', 'horizontal', 'internet', 'sync', 'technology', 'up', 'update', 'wifi'],
            sizes_px: [20, 24]
        }, {
            name: 'sync_disabled',
            version: 11,
            popularity: 341,
            codepoint: 58920,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['360', 'around', 'arrow', 'arrows', 'direction', 'disabled', 'enabled', 'inprogress', 'load', 'loading refresh', 'off', 'on', 'renew', 'rotate', 'slash', 'sync', 'turn'],
            sizes_px: [24]
        }, {
            name: 'sync_problem',
            version: 13,
            popularity: 790,
            codepoint: 58921,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['!', '360', 'alert', 'around', 'arrow', 'arrows', 'attention', 'caution', 'danger', 'direction', 'error', 'exclamation', 'important', 'inprogress', 'load', 'loading refresh', 'mark', 'notification', 'problem', 'renew', 'rotate', 'symbol', 'sync', 'turn', 'warning'],
            sizes_px: [24]
        }, {
            name: 'system_security_update',
            version: 8,
            popularity: 185,
            codepoint: 61554,
            unsupported_families: [],
            categories: ['device'],
            tags: ['Android', 'OS', 'arrow', 'cell', 'device', 'down', 'hardware', 'iOS', 'mobile', 'phone', 'security', 'system', 'tablet', 'update'],
            sizes_px: [24]
        }, {
            name: 'system_security_update_good',
            version: 8,
            popularity: 439,
            codepoint: 61555,
            unsupported_families: [],
            categories: ['device'],
            tags: ['Android', 'OS', 'approve', 'cell', 'check', 'complete', 'device', 'done', 'good', 'hardware', 'iOS', 'mark', 'mobile', 'ok', 'phone', 'security', 'select', 'system', 'tablet', 'tick', 'update', 'validate', 'verified', 'yes'],
            sizes_px: [24]
        }, {
            name: 'system_security_update_warning',
            version: 8,
            popularity: 177,
            codepoint: 61556,
            unsupported_families: [],
            categories: ['device'],
            tags: ['!', 'Android', 'OS', 'alert', 'attention', 'caution', 'cell', 'danger', 'device', 'error', 'exclamation', 'hardware', 'iOS', 'important', 'mark', 'mobile', 'notification', 'phone', 'security', 'symbol', 'system', 'tablet', 'update', 'warning'],
            sizes_px: [24]
        }, {
            name: 'system_update',
            version: 10,
            popularity: 510,
            codepoint: 58922,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['Android', 'OS', 'arrow', 'arrows', 'cell', 'device', 'direction', 'down', 'download', 'hardware', 'iOS', 'install', 'mobile', 'phone', 'system', 'tablet', 'update'],
            sizes_px: [24]
        }, {
            name: 'system_update_alt',
            version: 11,
            popularity: 1261,
            codepoint: 59607,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrow', 'down', 'download', 'export', 'system', 'update'],
            sizes_px: [24]
        }, {
            name: 'tab',
            version: 10,
            popularity: 1042,
            codepoint: 59608,
            unsupported_families: [],
            categories: ['action'],
            tags: ['browser', 'computer', 'document', 'documents', 'folder', 'internet', 'tab', 'tabs', 'web', 'website', 'window', 'windows'],
            sizes_px: [24]
        }, {
            name: 'tab_unselected',
            version: 10,
            popularity: 364,
            codepoint: 59609,
            unsupported_families: [],
            categories: ['action'],
            tags: ['browser', 'computer', 'document', 'documents', 'folder', 'internet', 'tab', 'tabs', 'unselected', 'web', 'website', 'window', 'windows'],
            sizes_px: [24]
        }, {
            name: 'table_chart',
            version: 10,
            popularity: 1954,
            codepoint: 57957,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['analytics', 'bar', 'bars', 'chart', 'data', 'diagram', 'graph', 'infographic grid', 'measure', 'metrics', 'statistics', 'table', 'tracking'],
            sizes_px: [24]
        }, {
            name: 'table_rows',
            version: 15,
            popularity: 1473,
            codepoint: 61697,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['grid', 'layout', 'lines', 'rows', 'stacked', 'table'],
            sizes_px: [20, 24]
        }, {
            name: 'table_view',
            version: 6,
            popularity: 2315,
            codepoint: 61886,
            unsupported_families: [],
            categories: ['action'],
            tags: ['format', 'grid', 'group', 'layout', 'multiple', 'table', 'view'],
            sizes_px: [24]
        }, {
            name: 'tablet',
            version: 10,
            popularity: 291,
            codepoint: 58159,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['Android', 'OS', 'device', 'hardware', 'iOS', 'ipad', 'mobile', 'tablet', 'web'],
            sizes_px: [24]
        }, {
            name: 'tablet_android',
            version: 12,
            popularity: 452,
            codepoint: 58160,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['OS', 'android', 'device', 'hardware', 'iOS', 'ipad', 'mobile', 'tablet', 'web'],
            sizes_px: [24]
        }, {
            name: 'tablet_mac',
            version: 10,
            popularity: 722,
            codepoint: 58161,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['Android', 'OS', 'device', 'hardware', 'iOS', 'ipad', 'mobile', 'tablet mac', 'web'],
            sizes_px: [24]
        }, {
            name: 'tag',
            version: 8,
            popularity: 2113,
            codepoint: 59887,
            unsupported_families: [],
            categories: ['content'],
            tags: ['hash', 'hashtag', 'key', 'media', 'number', 'pound', 'social', 'tag', 'trend'],
            sizes_px: [24]
        }, {
            name: 'tag_faces',
            version: 14,
            popularity: 711,
            codepoint: 58400,
            unsupported_families: [],
            categories: ['image'],
            tags: ['emoji', 'emotion', 'faces', 'happy', 'satisfied', 'smile', 'tag'],
            sizes_px: [24]
        }, {
            name: 'takeout_dining',
            version: 11,
            popularity: 611,
            codepoint: 60020,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['box', 'container', 'delivery', 'dining', 'food', 'meal', 'restaurant', 'takeout'],
            sizes_px: [20, 24]
        }, {
            name: 'tap_and_play',
            version: 10,
            popularity: 305,
            codepoint: 58923,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['Android', 'OS wifi', 'cell', 'connection', 'device', 'hardware', 'iOS', 'internet', 'mobile', 'network', 'phone', 'play', 'signal', 'tablet', 'tap', 'to', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'tapas',
            version: 4,
            popularity: 333,
            codepoint: 61929,
            unsupported_families: [],
            categories: ['places'],
            tags: ['appetizer', 'brunch', 'dinner', 'food', 'lunch', 'restaurant', 'snack', 'tapas'],
            sizes_px: [24]
        }, {
            name: 'task',
            version: 8,
            popularity: 4606,
            codepoint: 61557,
            unsupported_families: [],
            categories: ['device'],
            tags: ['approve', 'check', 'complete', 'data', 'doc', 'document', 'done', 'drive', 'file', 'folder', 'folders', 'mark', 'ok', 'page', 'paper', 'select', 'sheet', 'slide', 'task', 'tick', 'validate', 'verified', 'writing', 'yes'],
            sizes_px: [24]
        }, {
            name: 'task_alt',
            version: 4,
            popularity: 11043,
            codepoint: 58086,
            unsupported_families: [],
            categories: ['action'],
            tags: ['approve', 'check', 'circle', 'complete', 'done', 'mark', 'ok', 'select', 'task', 'tick', 'validate', 'verified', 'yes'],
            sizes_px: [24]
        }, {
            name: 'taxi_alert',
            version: 9,
            popularity: 360,
            codepoint: 61300,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['!', 'alert', 'attention', 'automobile', 'cab', 'car', 'cars', 'caution', 'danger', 'direction', 'error', 'exclamation', 'important', 'lyft', 'maps', 'mark', 'notification', 'public', 'symbol', 'taxi', 'transportation', 'uber', 'vehicle', 'warning', 'yellow'],
            sizes_px: [24]
        }, {
            name: 'terrain',
            version: 10,
            popularity: 736,
            codepoint: 58724,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['geography', 'landscape', 'mountain', 'terrain'],
            sizes_px: [24]
        }, {
            name: 'text_fields',
            version: 12,
            popularity: 1501,
            codepoint: 57954,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['T', 'add', 'alphabet', 'character', 'field', 'fields', 'font', 'input', 'letter', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'text_format',
            version: 10,
            popularity: 800,
            codepoint: 57701,
            unsupported_families: [],
            categories: ['content'],
            tags: ['alphabet', 'character', 'font', 'format', 'letter', 'square A', 'style', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'text_rotate_up',
            version: 10,
            popularity: 308,
            codepoint: 59706,
            unsupported_families: [],
            categories: ['action'],
            tags: ['A', 'alphabet', 'arrow', 'character', 'field', 'font', 'letter', 'move', 'rotate', 'symbol', 'text', 'type', 'up'],
            sizes_px: [24]
        }, {
            name: 'text_rotate_vertical',
            version: 10,
            popularity: 330,
            codepoint: 59707,
            unsupported_families: [],
            categories: ['action'],
            tags: ['A', 'alphabet', 'arrow', 'character', 'down', 'field', 'font', 'letter', 'move', 'rotate', 'symbol', 'text', 'type', 'vertical'],
            sizes_px: [24]
        }, {
            name: 'text_rotation_angledown',
            version: 10,
            popularity: 301,
            codepoint: 59708,
            unsupported_families: [],
            categories: ['action'],
            tags: ['A', 'alphabet', 'angledown', 'arrow', 'character', 'field', 'font', 'letter', 'move', 'rotate', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'text_rotation_angleup',
            version: 10,
            popularity: 302,
            codepoint: 59709,
            unsupported_families: [],
            categories: ['action'],
            tags: ['A', 'alphabet', 'angleup', 'arrow', 'character', 'field', 'font', 'letter', 'move', 'rotate', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'text_rotation_down',
            version: 10,
            popularity: 306,
            codepoint: 59710,
            unsupported_families: [],
            categories: ['action'],
            tags: ['A', 'alphabet', 'arrow', 'character', 'dow', 'field', 'font', 'letter', 'move', 'rotate', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'text_rotation_none',
            version: 10,
            popularity: 350,
            codepoint: 59711,
            unsupported_families: [],
            categories: ['action'],
            tags: ['A', 'alphabet', 'arrow', 'character', 'field', 'font', 'letter', 'move', 'none', 'rotate', 'symbol', 'text', 'type'],
            sizes_px: [24]
        }, {
            name: 'text_snippet',
            version: 6,
            popularity: 3521,
            codepoint: 61894,
            unsupported_families: [],
            categories: ['file'],
            tags: ['data', 'doc', 'document', 'file', 'note', 'notes', 'snippet', 'storage', 'text', 'writing'],
            sizes_px: [24]
        }, {
            name: 'textsms',
            version: 10,
            popularity: 3227,
            codepoint: 57560,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['bubble', 'chat', 'comment', 'communicate', 'dots', 'feedback', 'message', 'speech', 'textsms'],
            sizes_px: [24]
        }, {
            name: 'texture',
            version: 10,
            popularity: 470,
            codepoint: 58401,
            unsupported_families: [],
            categories: ['image'],
            tags: ['diagonal', 'lines', 'pattern', 'stripes', 'texture'],
            sizes_px: [24]
        }, {
            name: 'theater_comedy',
            version: 9,
            popularity: 760,
            codepoint: 60006,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['broadway', 'comedy', 'event', 'movie', 'musical', 'places', 'show', 'standup', 'theater', 'tour', 'watch'],
            sizes_px: [20, 24]
        }, {
            name: 'theaters',
            version: 10,
            popularity: 1436,
            codepoint: 59610,
            unsupported_families: [],
            categories: ['action'],
            tags: ['film', 'movie', 'movies', 'show', 'showtimes', 'theater', 'theaters', 'watch'],
            sizes_px: [24]
        }, {
            name: 'thermostat',
            version: 9,
            popularity: 2616,
            codepoint: 61558,
            unsupported_families: [],
            categories: ['device'],
            tags: ['forecast', 'temperature', 'thermostat', 'weather'],
            sizes_px: [24]
        }, {
            name: 'thermostat_auto',
            version: 8,
            popularity: 376,
            codepoint: 61559,
            unsupported_families: [],
            categories: ['image'],
            tags: ['A', 'auto', 'celsius', 'fahrenheit', 'meter', 'temp', 'temperature', 'thermometer', 'thermostat'],
            sizes_px: [24]
        }, {
            name: 'thumb_down',
            version: 13,
            popularity: 3108,
            codepoint: 59611,
            unsupported_families: [],
            categories: ['action'],
            tags: ['ate', 'dislike', 'down', 'downvote', 'favorite', 'fingers', 'gesture', 'hand', 'hands', 'like', 'rank', 'ranking', 'rating', 'thumb'],
            sizes_px: [24]
        }, {
            name: 'thumb_down_alt',
            version: 9,
            popularity: 1094,
            codepoint: 59414,
            unsupported_families: [],
            categories: ['social'],
            tags: ['bad', 'decline', 'disapprove', 'dislike', 'down', 'feedback', 'hate', 'negative', 'no', 'reject', 'social', 'thumb', 'veto', 'vote'],
            sizes_px: [24]
        }, {
            name: 'thumb_down_off_alt',
            version: 11,
            popularity: 1492,
            codepoint: 59890,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bad', 'decline', 'disapprove', 'dislike', 'down', 'feedback', 'hate', 'negative', 'no', 'reject', 'sad', 'social', 'thumb', 'veto', 'vote'],
            sizes_px: [24]
        }, {
            name: 'thumb_up',
            version: 13,
            popularity: 17452,
            codepoint: 59612,
            unsupported_families: [],
            categories: ['action'],
            tags: ['favorite', 'fingers', 'gesture', 'hand', 'hands', 'like', 'rank', 'ranking', 'rate', 'rating', 'thumb', 'up', 'upvote'],
            sizes_px: [24]
        }, {
            name: 'thumb_up_alt',
            version: 9,
            popularity: 3496,
            codepoint: 59415,
            unsupported_families: [],
            categories: ['social'],
            tags: ['agreed', 'approved', 'confirm', 'correct', 'favorite', 'feedback', 'good', 'happy', 'like', 'okay', 'positive', 'satisfaction', 'social', 'thumb', 'up', 'vote', 'yes'],
            sizes_px: [24]
        }, {
            name: 'thumb_up_off_alt',
            version: 11,
            popularity: 5436,
            codepoint: 59891,
            unsupported_families: [],
            categories: ['action'],
            tags: ['agreed', 'approved', 'confirm', 'correct', 'favorite', 'feedback', 'good', 'happy', 'like', 'okay', 'positive', 'satisfaction', 'social', 'thumb', 'up', 'vote', 'yes'],
            sizes_px: [24]
        }, {
            name: 'thumbs_up_down',
            version: 10,
            popularity: 1698,
            codepoint: 59613,
            unsupported_families: [],
            categories: ['action'],
            tags: ['dislike', 'down', 'favorite', 'fingers', 'gesture', 'hands', 'like', 'rate', 'rating', 'thumbs', 'up'],
            sizes_px: [24]
        }, {
            name: 'time_to_leave',
            version: 10,
            popularity: 862,
            codepoint: 58924,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['automobile', 'car', 'cars', 'destination', 'direction', 'drive', 'estimate', 'eta', 'maps', 'public', 'transportation', 'travel', 'trip', 'vehicle'],
            sizes_px: [24]
        }, {
            name: 'timelapse',
            version: 10,
            popularity: 1047,
            codepoint: 58402,
            unsupported_families: [],
            categories: ['image'],
            tags: ['duration', 'motion', 'photo', 'time', 'timelapse', 'timer', 'video'],
            sizes_px: [24]
        }, {
            name: 'timeline',
            version: 11,
            popularity: 4625,
            codepoint: 59682,
            unsupported_families: [],
            categories: ['action'],
            tags: ['data', 'history', 'line', 'movement', 'point', 'points', 'timeline', 'tracking', 'trending', 'zigzag'],
            sizes_px: [24]
        }, {
            name: 'timer',
            version: 10,
            popularity: 4671,
            codepoint: 58405,
            unsupported_families: [],
            categories: ['image'],
            tags: ['alarm', 'alart', 'bell', 'clock', 'disabled', 'duration', 'enabled', 'notification', 'off', 'on', 'slash', 'stop', 'time', 'timer', 'watch'],
            sizes_px: [24]
        }, {
            name: 'timer_10',
            version: 10,
            popularity: 153,
            codepoint: 58403,
            unsupported_families: [],
            categories: ['image'],
            tags: ['10', 'digits', 'duration', 'number', 'numbers', 'seconds', 'time', 'timer'],
            sizes_px: [24]
        }, {
            name: 'timer_10_select',
            version: 13,
            popularity: 172,
            codepoint: 61562,
            unsupported_families: [],
            categories: ['device'],
            tags: ['10', 'alphabet', 'camera', 'character', 'digit', 'font', 'letter', 'number', 'seconds', 'select', 'symbol', 'text', 'timer', 'type'],
            sizes_px: [24]
        }, {
            name: 'timer_3',
            version: 10,
            popularity: 160,
            codepoint: 58404,
            unsupported_families: [],
            categories: ['image'],
            tags: ['3', 'digits', 'duration', 'number', 'numbers', 'seconds', 'time', 'timer'],
            sizes_px: [24]
        }, {
            name: 'timer_3_select',
            version: 13,
            popularity: 153,
            codepoint: 61563,
            unsupported_families: [],
            categories: ['device'],
            tags: ['3', 'alphabet', 'camera', 'character', 'digit', 'font', 'letter', 'number', 'seconds', 'select', 'symbol', 'text', 'timer', 'type'],
            sizes_px: [24]
        }, {
            name: 'timer_off',
            version: 10,
            popularity: 409,
            codepoint: 58406,
            unsupported_families: [],
            categories: ['image'],
            tags: ['alarm', 'alart', 'bell', 'clock', 'disabled', 'duration', 'enabled', 'notification', 'off', 'on', 'slash', 'stop', 'time', 'timer', 'watch'],
            sizes_px: [24]
        }, {
            name: 'title',
            version: 9,
            popularity: 1342,
            codepoint: 57956,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['T', 'alphabet', 'character', 'font', 'header', 'letter', 'subject', 'symbol', 'text', 'title', 'type'],
            sizes_px: [24]
        }, {
            name: 'toc',
            version: 11,
            popularity: 2143,
            codepoint: 59614,
            unsupported_families: [],
            categories: ['action'],
            tags: ['content', 'format', 'lines', 'list', 'order', 'reorder', 'stacked', 'table', 'title', 'titles', 'toc'],
            sizes_px: [24]
        }, {
            name: 'today',
            version: 12,
            popularity: 7039,
            codepoint: 59615,
            unsupported_families: [],
            categories: ['action'],
            tags: ['calendar', 'date', 'day', 'event', 'mark', 'month', 'remember', 'reminder', 'schedule', 'time', 'today'],
            sizes_px: [24]
        }, {
            name: 'toggle_off',
            version: 10,
            popularity: 3830,
            codepoint: 59893,
            unsupported_families: [],
            categories: ['toggle'],
            tags: ['active', 'app', 'application', 'components', 'configuration', 'control', 'design', 'disable', 'inable', 'inactive', 'interface',
                'off', 'on', 'selection', 'settings', 'site', 'slider', 'switch', 'toggle', 'ui', 'ux', 'web', 'website'],
            sizes_px: [24]
        }, {
            name: 'toggle_on',
            version: 10,
            popularity: 5988,
            codepoint: 59894,
            unsupported_families: [],
            categories: ['toggle'],
            tags: ['active', 'app', 'application', 'components', 'configuration', 'control', 'design', 'disable', 'inable', 'inactive', 'interface',
                'off', 'on', 'selection', 'settings', 'site', 'slider', 'switch', 'toggle', 'ui', 'ux', 'web', 'website'],
            sizes_px: [24]
        }, {
            name: 'toll',
            version: 10,
            popularity: 1025,
            codepoint: 59616,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bill', 'booth', 'car', 'card', 'cash', 'coin', 'commerce', 'credit', 'currency', 'dollars', 'highway', 'money', 'online', 'pay', 'payment', 'ticket', 'toll'],
            sizes_px: [24]
        }, {
            name: 'tonality',
            version: 10,
            popularity: 278,
            codepoint: 58407,
            unsupported_families: [],
            categories: ['image'],
            tags: ['circle', 'edit', 'editing', 'filter', 'image', 'photography', 'picture', 'tonality'],
            sizes_px: [24]
        }, {
            name: 'topic',
            version: 5,
            popularity: 1216,
            codepoint: 61896,
            unsupported_families: [],
            categories: ['file'],
            tags: ['data', 'doc', 'document', 'drive', 'file', 'folder', 'sheet', 'slide', 'storage', 'topic'],
            sizes_px: [24]
        }, {
            name: 'touch_app',
            version: 11,
            popularity: 4985,
            codepoint: 59667,
            unsupported_families: [],
            categories: ['action'],
            tags: ['app', 'command', 'fingers', 'gesture', 'hand', 'press', 'tap', 'touch'],
            sizes_px: [24]
        }, {
            name: 'tour',
            version: 10,
            popularity: 1214,
            codepoint: 61301,
            unsupported_families: [],
            categories: ['action'],
            tags: ['destination', 'flag', 'places', 'tour', 'travel', 'visit'],
            sizes_px: [24]
        }, {
            name: 'toys',
            version: 12,
            popularity: 473,
            codepoint: 58162,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['car', 'games', 'kids', 'toys', 'windmill'],
            sizes_px: [20, 24]
        }, {
            name: 'track_changes',
            version: 9,
            popularity: 2404,
            codepoint: 59617,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bullseye', 'changes', 'circle', 'evolve', 'lines', 'movement', 'rotate', 'shift', 'target', 'track'],
            sizes_px: [24]
        }, {
            name: 'traffic',
            version: 10,
            popularity: 1181,
            codepoint: 58725,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['direction', 'light', 'maps', 'signal', 'street', 'traffic'],
            sizes_px: [24]
        }, {
            name: 'train',
            version: 9,
            popularity: 1237,
            codepoint: 58736,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['automobile', 'car', 'cars', 'direction', 'maps', 'public', 'rail', 'subway', 'train', 'transportation', 'vehicle'],
            sizes_px: [24]
        }, {
            name: 'tram',
            version: 9,
            popularity: 430,
            codepoint: 58737,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['automobile', 'car', 'cars', 'direction', 'maps', 'public', 'rail', 'subway', 'train', 'tram', 'transportation', 'vehicle'],
            sizes_px: [24]
        }, {
            name: 'transfer_within_a_station',
            version: 10,
            popularity: 664,
            codepoint: 58738,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['a', 'arrow', 'arrows', 'body', 'direction', 'human', 'left', 'maps', 'people', 'person', 'public', 'right', 'route', 'station',
                'stop', 'transfer', 'transportation', 'vehicle', 'walk', 'within'],
            sizes_px: [24]
        }, {
            name: 'transform',
            version: 10,
            popularity: 423,
            codepoint: 58408,
            unsupported_families: [],
            categories: ['image'],
            tags: ['adjust', 'crop', 'edit', 'editing', 'image', 'photo', 'picture', 'transform'],
            sizes_px: [24]
        }, {
            name: 'transgender',
            version: 1,
            popularity: 729,
            codepoint: 58765,
            unsupported_families: [],
            categories: ['social'],
            tags: ['female', 'gender', 'lgbt', 'male', 'neutrual', 'social', 'transgender'],
            sizes_px: [20, 24]
        }, {
            name: 'transit_enterexit',
            version: 10,
            popularity: 312,
            codepoint: 58745,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['arrow', 'direction', 'enterexit', 'maps', 'navigation', 'route', 'transit', 'transportation'],
            sizes_px: [24]
        }, {
            name: 'translate',
            version: 10,
            popularity: 3242,
            codepoint: 59618,
            unsupported_families: [],
            categories: ['action'],
            tags: ['language', 'speaking', 'speech', 'translate', 'translator', 'words'],
            sizes_px: [24]
        }, {
            name: 'travel_explore',
            version: 6,
            popularity: 3671,
            codepoint: 58075,
            unsupported_families: [],
            categories: ['social'],
            tags: ['earth', 'explore', 'find', 'glass', 'global', 'globe', 'look', 'magnify', 'magnifying', 'map', 'network', 'planet', 'search', 'see', 'social', 'space', 'travel', 'web', 'world'],
            sizes_px: [20, 24]
        }, {
            name: 'trending_down',
            version: 13,
            popularity: 1874,
            codepoint: 59619,
            unsupported_families: [],
            categories: ['action'],
            tags: ['analytics', 'arrow', 'data', 'diagram', 'down', 'graph', 'infographic', 'measure', 'metrics', 'movement', 'rate', 'rating', 'statistics', 'tracking', 'trending'],
            sizes_px: [24]
        }, {
            name: 'trending_flat',
            version: 14,
            popularity: 2969,
            codepoint: 59620,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrow', 'change', 'data', 'flat', 'metric', 'movement', 'rate', 'right', 'track', 'tracking', 'trending'],
            sizes_px: [24]
        }, {
            name: 'trending_up',
            version: 14,
            popularity: 12266,
            codepoint: 59621,
            unsupported_families: [],
            categories: ['action'],
            tags: ['analytics', 'arrow', 'data', 'diagram', 'graph', 'infographic', 'measure', 'metrics', 'movement', 'rate', 'rating', 'statistics', 'tracking', 'trending', 'up'],
            sizes_px: [24]
        }, {
            name: 'trip_origin',
            version: 10,
            popularity: 688,
            codepoint: 58747,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['circle', 'departure', 'origin', 'trip'],
            sizes_px: [24]
        }, {
            name: 'try',
            version: 7,
            popularity: 866,
            codepoint: 61564,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bookmark', 'bubble', 'chat', 'comment', 'communicate', 'favorite', 'feedback', 'highlight', 'important', 'marked', 'message', 'save', 'saved', 'shape', 'special', 'speech', 'star', 'try'],
            sizes_px: [24]
        }, {
            name: 'tty',
            version: 6,
            popularity: 239,
            codepoint: 61866,
            unsupported_families: [],
            categories: ['places'],
            tags: ['call', 'cell', 'contact', 'deaf', 'device', 'hardware', 'impaired', 'mobile', 'phone', 'speech', 'talk', 'telephone', 'text', 'tty'],
            sizes_px: [24]
        }, {
            name: 'tune',
            version: 10,
            popularity: 5598,
            codepoint: 58409,
            unsupported_families: [],
            categories: ['image'],
            tags: ['adjust', 'edit', 'editing', 'options', 'setting', 'settings', 'tune'],
            sizes_px: [24]
        }, {
            name: 'tungsten',
            version: 8,
            popularity: 1612,
            codepoint: 61565,
            unsupported_families: [],
            categories: ['device'],
            tags: ['electricity', 'indoor', 'lamp', 'light', 'lightbulb', 'setting', 'tungsten'],
            sizes_px: [24]
        }, {
            name: 'turned_in',
            version: 9,
            popularity: 1240,
            codepoint: 59622,
            unsupported_families: [],
            categories: ['action'],
            tags: ['archive', 'bookmark', 'favorite', 'in', 'label', 'library', 'read', 'reading', 'remember', 'ribbon', 'save', 'tag', 'turned'],
            sizes_px: [24]
        }, {
            name: 'turned_in_not',
            version: 9,
            popularity: 1121,
            codepoint: 59623,
            unsupported_families: [],
            categories: ['action'],
            tags: ['archive', 'bookmark', 'favorite', 'in', 'label', 'library', 'not', 'read', 'reading', 'remember', 'ribbon', 'save', 'tag', 'turned'],
            sizes_px: [24]
        }, {
            name: 'tv',
            version: 11,
            popularity: 2040,
            codepoint: 58163,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['device', 'display', 'linear', 'living room', 'monitor', 'screen', 'screencast', 'stream', 'television', 'tv', 'video', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'tv_off',
            version: 9,
            popularity: 150,
            codepoint: 58951,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['Android', 'OS', 'chrome', 'desktop', 'device', 'disabled', 'enabled', 'hardware', 'iOS', 'mac', 'monitor', 'off', 'on', 'slash', 'television', 'tv', 'web', 'window'],
            sizes_px: [24]
        }, {
            name: 'two_wheeler',
            version: 12,
            popularity: 1143,
            codepoint: 59897,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['automobile', 'bike', 'car', 'cars', 'direction', 'maps', 'motorcycle', 'public', 'scooter', 'sport', 'transportation', 'travel', 'twom wheeler', 'vehicle'],
            sizes_px: [20, 24]
        }, {
            name: 'umbrella',
            version: 6,
            popularity: 344,
            codepoint: 61869,
            unsupported_families: [],
            categories: ['places'],
            tags: ['beach', 'protection', 'rain', 'sun', 'sunny', 'umbrella'],
            sizes_px: [24]
        }, {
            name: 'unarchive',
            version: 11,
            popularity: 861,
            codepoint: 57705,
            unsupported_families: [],
            categories: ['content'],
            tags: ['archive', 'arrow', 'inbox', 'mail', 'store', 'unarchive', 'undo', 'up'],
            sizes_px: [24]
        }, {
            name: 'undo',
            version: 11,
            popularity: 3446,
            codepoint: 57702,
            unsupported_families: [],
            categories: ['content'],
            tags: ['arrow', 'backward', 'mail', 'previous', 'redo', 'repeat', 'rotate', 'undo'],
            sizes_px: [24]
        }, {
            name: 'unfold_less',
            version: 10,
            popularity: 1373,
            codepoint: 58838,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['arrow', 'arrows', 'chevron', 'collapse', 'direction', 'expand', 'expandable', 'inward', 'less', 'list', 'navigation', 'unfold', 'up'],
            sizes_px: [24]
        }, {
            name: 'unfold_more',
            version: 10,
            popularity: 3481,
            codepoint: 58839,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['arrow', 'arrows', 'chevron', 'collapse', 'direction', 'down', 'expand', 'expandable', 'list', 'more', 'navigation', 'unfold'],
            sizes_px: [24]
        }, {
            name: 'unpublished',
            version: 5,
            popularity: 1232,
            codepoint: 62006,
            unsupported_families: [],
            categories: ['action'],
            tags: ['approve', 'check', 'circle', 'complete', 'disabled', 'done', 'enabled', 'mark', 'off', 'ok', 'on', 'select', 'slash', 'tick', 'unpublished', 'validate', 'verified', 'yes'],
            sizes_px: [24]
        }, {
            name: 'unsubscribe',
            version: 10,
            popularity: 687,
            codepoint: 57579,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['cancel', 'close', 'email', 'envelop', 'esubscribe', 'letter', 'mail', 'message', 'newsletter', 'off', 'remove', 'send', 'unsubscribe'],
            sizes_px: [24]
        }, {
            name: 'upcoming',
            version: 7,
            popularity: 767,
            codepoint: 61566,
            unsupported_families: [],
            categories: ['content'],
            tags: ['alarm', 'calendar', 'mail', 'message', 'notification', 'upcoming'],
            sizes_px: [24]
        }, {
            name: 'update',
            version: 11,
            popularity: 6117,
            codepoint: 59683,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrow', 'back', 'backwards', 'clock', 'forward', 'history', 'load', 'refresh', 'reverse', 'schedule', 'time', 'update'],
            sizes_px: [24]
        }, {
            name: 'update_disabled',
            version: 6,
            popularity: 426,
            codepoint: 57461,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrow', 'back', 'backwards', 'clock', 'date', 'disabled', 'enabled', 'forward', 'history', 'load', 'off', 'on', 'refresh', 'reverse', 'rotate', 'schedule', 'slash', 'time', 'update'],
            sizes_px: [20, 24]
        }, {
            name: 'upgrade',
            version: 10,
            popularity: 1694,
            codepoint: 61691,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrow', 'export', 'instal', 'line', 'replace', 'up', 'update', 'upgrade'],
            sizes_px: [20, 24]
        }, {
            name: 'upload',
            version: 8,
            popularity: 2537,
            codepoint: 61595,
            unsupported_families: [],
            categories: ['file'],
            tags: ['arrow', 'arrows', 'download', 'drive', 'up', 'upload'],
            sizes_px: [24]
        }, {
            name: 'upload_file',
            version: 8,
            popularity: 4390,
            codepoint: 59900,
            unsupported_families: [],
            categories: ['file'],
            tags: ['arrow', 'data', 'doc', 'document', 'download', 'drive', 'file', 'folder', 'folders', 'page', 'paper', 'sheet', 'slide', 'up', 'upload', 'writing'],
            sizes_px: [24]
        }, {
            name: 'usb',
            version: 10,
            popularity: 517,
            codepoint: 57824,
            unsupported_families: [],
            categories: ['device'],
            tags: ['cable', 'connection', 'device', 'usb', 'wire'],
            sizes_px: [24]
        }, {
            name: 'usb_off',
            version: 2,
            popularity: 155,
            codepoint: 58618,
            unsupported_families: [],
            categories: ['device'],
            tags: ['cable', 'connection', 'device', 'off', 'usb', 'wire'],
            sizes_px: [20, 24]
        }, {
            name: 'verified',
            version: 9,
            popularity: 15822,
            codepoint: 61302,
            unsupported_families: [],
            categories: ['action'],
            tags: ['approve', 'badge', 'burst', 'check', 'complete', 'done', 'mark', 'ok', 'select', 'star', 'tick', 'validate', 'verified', 'yes'],
            sizes_px: [20, 24]
        }, {
            name: 'verified_user',
            version: 13,
            popularity: 9183,
            codepoint: 59624,
            unsupported_families: [],
            categories: ['action'],
            tags: ['approve', 'certified', 'check', 'complete', 'done', 'mark', 'ok', 'privacy', 'private', 'protect', 'protection', 'security', 'select', 'shield', 'tick', 'user', 'validate', 'verified', 'yes'],
            sizes_px: [24]
        }, {
            name: 'vertical_align_bottom',
            version: 10,
            popularity: 786,
            codepoint: 57944,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['align', 'alignment', 'arrow', 'bottom', 'doc', 'down', 'edit', 'editing', 'editor', 'sheet', 'spreadsheet', 'text', 'type', 'vertical', 'writing'],
            sizes_px: [24]
        }, {
            name: 'vertical_align_center',
            version: 10,
            popularity: 347,
            codepoint: 57945,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['align', 'alignment', 'arrow', 'center', 'doc', 'down', 'edit', 'editing', 'editor', 'sheet', 'spreadsheet', 'text', 'type', 'up', 'vertical', 'writing'],
            sizes_px: [24]
        }, {
            name: 'vertical_align_top',
            version: 10,
            popularity: 726,
            codepoint: 57946,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['align', 'alignment', 'arrow', 'doc', 'edit', 'editing', 'editor', 'sheet', 'spreadsheet', 'text', 'top', 'type', 'up', 'vertical', 'writing'],
            sizes_px: [24]
        }, {
            name: 'vertical_distribute',
            version: 4,
            popularity: 241,
            codepoint: 57462,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['alignment', 'distribute', 'format', 'layout', 'lines', 'paragraph', 'rule', 'rules', 'style', 'text', 'vertical'],
            sizes_px: [24]
        }, {
            name: 'vertical_split',
            version: 10,
            popularity: 836,
            codepoint: 59721,
            unsupported_families: [],
            categories: ['action'],
            tags: ['design', 'format', 'grid', 'layout', 'paragraph', 'split', 'text', 'vertical', 'website', 'writing'],
            sizes_px: [24]
        }, {
            name: 'vibration',
            version: 10,
            popularity: 437,
            codepoint: 58925,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['Android', 'OS', 'alert', 'cell', 'device', 'hardware', 'iOS', 'mobile', 'mode', 'motion', 'notification', 'phone', 'silence', 'silent', 'tablet', 'vibrate', 'vibration'],
            sizes_px: [24]
        }, {
            name: 'video_call',
            version: 9,
            popularity: 1520,
            codepoint: 57456,
            unsupported_families: [],
            categories: ['av'],
            tags: ['+', 'add', 'call', 'camera', 'chat', 'conference', 'film', 'filming', 'hardware', 'image', 'motion', 'new', 'picture', 'plus', 'symbol', 'video', 'videography'],
            sizes_px: [24]
        }, {
            name: 'video_camera_back',
            version: 8,
            popularity: 416,
            codepoint: 61567,
            unsupported_families: [],
            categories: ['image'],
            tags: ['back', 'camera', 'image', 'landscape', 'mountain', 'mountains', 'photo', 'photography', 'picture', 'rear', 'video'],
            sizes_px: [24]
        }, {
            name: 'video_camera_front',
            version: 8,
            popularity: 1135,
            codepoint: 61568,
            unsupported_families: [],
            categories: ['image'],
            tags: ['account', 'camera', 'face', 'front', 'human', 'image', 'people', 'person', 'photo', 'photography', 'picture', 'profile', 'user', 'video'],
            sizes_px: [24]
        }, {
            name: 'video_label',
            version: 9,
            popularity: 236,
            codepoint: 57457,
            unsupported_families: [],
            categories: ['av'],
            tags: ['label', 'screen', 'video', 'window'],
            sizes_px: [24]
        }, {
            name: 'video_library',
            version: 11,
            popularity: 1756,
            codepoint: 57418,
            unsupported_families: [],
            categories: ['av'],
            tags: ['arrow', 'collection', 'library', 'play', 'video'],
            sizes_px: [24]
        }, {
            name: 'video_settings',
            version: 10,
            popularity: 601,
            codepoint: 60021,
            unsupported_families: [],
            categories: ['av'],
            tags: ['change', 'details', 'gear', 'info', 'information', 'options', 'play', 'screen', 'service', 'setting', 'settings', 'video', 'window'],
            sizes_px: [20, 24]
        }, {
            name: 'video_stable',
            version: 8,
            popularity: 155,
            codepoint: 61569,
            unsupported_families: [],
            categories: ['image'],
            tags: ['film', 'filming', 'recording', 'setting', 'stability', 'stable', 'taping', 'video'],
            sizes_px: [24]
        }, {
            name: 'videocam',
            version: 11,
            popularity: 7824,
            codepoint: 57419,
            unsupported_families: [],
            categories: ['av'],
            tags: ['cam', 'camera', 'conference', 'film', 'filming', 'hardware', 'image', 'motion', 'picture', 'video', 'videography'],
            sizes_px: [24]
        }, {
            name: 'videocam_off',
            version: 10,
            popularity: 1128,
            codepoint: 57420,
            unsupported_families: [],
            categories: ['av'],
            tags: ['cam', 'camera', 'conference', 'disabled', 'enabled', 'film', 'filming', 'hardware', 'image', 'motion', 'off', 'offline', 'on', 'picture', 'slash', 'video', 'videography'],
            sizes_px: [24]
        }, {
            name: 'videogame_asset',
            version: 9,
            popularity: 1135,
            codepoint: 58168,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['asset', 'console', 'controller', 'device', 'game', 'gamepad', 'gaming', 'playstation', 'video'],
            sizes_px: [24]
        }, {
            name: 'videogame_asset_off',
            version: 2,
            popularity: 142,
            codepoint: 58624,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['asset', 'console', 'controller', 'device', 'disabled', 'enabled', 'game', 'gamepad', 'gaming', 'off', 'on', 'playstation', 'slash', 'video', 'videogame'],
            sizes_px: [20, 24]
        }, {
            name: 'view_agenda',
            version: 11,
            popularity: 1232,
            codepoint: 59625,
            unsupported_families: [],
            categories: ['action'],
            tags: ['agenda', 'cards', 'design', 'format', 'grid', 'layout', 'stacked', 'view', 'website'],
            sizes_px: [20, 24]
        }, {
            name: 'view_array',
            version: 11,
            popularity: 368,
            codepoint: 59626,
            unsupported_families: [],
            categories: ['action'],
            tags: ['array', 'design', 'format', 'grid', 'layout', 'view', 'website'],
            sizes_px: [20, 24]
        }, {
            name: 'view_carousel',
            version: 11,
            popularity: 1088,
            codepoint: 59627,
            unsupported_families: [],
            categories: ['action'],
            tags: ['cards', 'carousel', 'design', 'format', 'grid', 'layout', 'view', 'website'],
            sizes_px: [20, 24]
        }, {
            name: 'view_column',
            version: 11,
            popularity: 1291,
            codepoint: 59628,
            unsupported_families: [],
            categories: ['action'],
            tags: ['column', 'design', 'format', 'grid', 'layout', 'vertical', 'view', 'website'],
            sizes_px: [20, 24]
        }, {
            name: 'view_comfy',
            version: 11,
            popularity: 445,
            codepoint: 58410,
            unsupported_families: [],
            categories: ['image'],
            tags: ['comfy', 'grid', 'layout', 'pattern', 'squares', 'view'],
            sizes_px: [24]
        }, {
            name: 'view_compact',
            version: 10,
            popularity: 388,
            codepoint: 58411,
            unsupported_families: [],
            categories: ['image'],
            tags: ['compact', 'grid', 'layout', 'pattern', 'squares', 'view'],
            sizes_px: [24]
        }, {
            name: 'view_day',
            version: 11,
            popularity: 669,
            codepoint: 59629,
            unsupported_families: [],
            categories: ['action'],
            tags: ['cards', 'carousel', 'day', 'design', 'format', 'grid', 'layout', 'view', 'website'],
            sizes_px: [24]
        }, {
            name: 'view_headline',
            version: 9,
            popularity: 2569,
            codepoint: 59630,
            unsupported_families: [],
            categories: ['action'],
            tags: ['design', 'format', 'grid', 'headline', 'layout', 'paragraph', 'text', 'view', 'website'],
            sizes_px: [24]
        }, {
            name: 'view_in_ar',
            version: 9,
            popularity: 4957,
            codepoint: 59902,
            unsupported_families: [],
            categories: ['action'],
            tags: ['3d', 'ar', 'augmented', 'cube', 'daydream', 'headset', 'in', 'reality', 'square', 'view', 'vr'],
            sizes_px: [24]
        }, {
            name: 'view_list',
            version: 12,
            popularity: 7325,
            codepoint: 59631,
            unsupported_families: [],
            categories: ['action'],
            tags: ['design', 'format', 'grid', 'layout', 'lines', 'list', 'stacked', 'view', 'website'],
            sizes_px: [20, 24]
        }, {
            name: 'view_module',
            version: 11,
            popularity: 1807,
            codepoint: 59632,
            unsupported_families: [],
            categories: ['action'],
            tags: ['design', 'format', 'grid', 'layout', 'module', 'square', 'squares', 'stacked', 'view', 'website'],
            sizes_px: [20, 24]
        }, {
            name: 'view_quilt',
            version: 12,
            popularity: 843,
            codepoint: 59633,
            unsupported_families: [],
            categories: ['action'],
            tags: ['design', 'format', 'grid', 'layout', 'quilt', 'square', 'squares', 'stacked', 'view', 'website'],
            sizes_px: [20, 24]
        }, {
            name: 'view_sidebar',
            version: 11,
            popularity: 998,
            codepoint: 61716,
            unsupported_families: [],
            categories: ['action'],
            tags: ['design', 'format', 'grid', 'layout', 'sidebar', 'view', 'web'],
            sizes_px: [20, 24]
        }, {
            name: 'view_stream',
            version: 11,
            popularity: 643,
            codepoint: 59634,
            unsupported_families: [],
            categories: ['action'],
            tags: ['design', 'format', 'grid', 'layout', 'lines', 'list', 'stacked', 'stream', 'view', 'website'],
            sizes_px: [20, 24]
        }, {
            name: 'view_week',
            version: 11,
            popularity: 1214,
            codepoint: 59635,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bars', 'columns', 'design', 'format', 'grid', 'layout', 'view', 'website', 'week'],
            sizes_px: [20, 24]
        }, {
            name: 'vignette',
            version: 10,
            popularity: 147,
            codepoint: 58421,
            unsupported_families: [],
            categories: ['image'],
            tags: ['border', 'edit', 'editing', 'filter', 'gradient', 'image', 'photo', 'photography', 'setting', 'vignette'],
            sizes_px: [24]
        }, {
            name: 'villa',
            version: 2,
            popularity: 604,
            codepoint: 58758,
            unsupported_families: [],
            categories: ['places'],
            tags: ['architecture', 'beach', 'estate', 'home', 'house', 'maps', 'place', 'real', 'residence', 'residential', 'traveling', 'vacation stay', 'villa'],
            sizes_px: [20, 24]
        }, {
            name: 'visibility',
            version: 11,
            popularity: 32330,
            codepoint: 59636,
            unsupported_families: [],
            categories: ['action'],
            tags: ['eye', 'on', 'reveal', 'see', 'show', 'view', 'visability'],
            sizes_px: [24]
        }, {
            name: 'visibility_off',
            version: 10,
            popularity: 12628,
            codepoint: 59637,
            unsupported_families: [],
            categories: ['action'],
            tags: ['disabled', 'enabled', 'eye', 'off', 'on', 'reveal', 'see', 'show', 'slash', 'view', 'visability'],
            sizes_px: [24]
        }, {
            name: 'voice_chat',
            version: 10,
            popularity: 503,
            codepoint: 58926,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['bubble', 'cam', 'camera', 'chat', 'comment', 'communicate', 'facetime', 'feedback', 'message', 'speech', 'video', 'voice'],
            sizes_px: [24]
        }, {
            name: 'voice_over_off',
            version: 9,
            popularity: 429,
            codepoint: 59722,
            unsupported_families: [],
            categories: ['action'],
            tags: ['account', 'disabled', 'enabled', 'face', 'human', 'off', 'on', 'over', 'people', 'person', 'profile', 'recording', 'slash', 'speak', 'speaking', 'speech', 'transcript', 'user', 'voice'],
            sizes_px: [24]
        }, {
            name: 'voicemail',
            version: 10,
            popularity: 365,
            codepoint: 57561,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['call', 'device', 'message', 'missed', 'mobile', 'phone', 'recording', 'voice', 'voicemail'],
            sizes_px: [24]
        }, {
            name: 'volume_down',
            version: 11,
            popularity: 990,
            codepoint: 57421,
            unsupported_families: [],
            categories: ['av'],
            tags: ['audio', 'av', 'control', 'down', 'music', 'quieter', 'shh', 'soft', 'sound', 'speaker', 'tv', 'volume'],
            sizes_px: [24]
        }, {
            name: 'volume_mute',
            version: 11,
            popularity: 1753,
            codepoint: 57422,
            unsupported_families: [],
            categories: ['av'],
            tags: ['audio', 'control', 'music', 'mute', 'sound', 'speaker', 'tv', 'volume'],
            sizes_px: [24]
        }, {
            name: 'volume_off',
            version: 12,
            popularity: 3852,
            codepoint: 57423,
            unsupported_families: [],
            categories: ['av'],
            tags: ['audio', 'av', 'control', 'disabled', 'enabled', 'low', 'music', 'mute', 'off', 'on', 'slash', 'sound', 'speaker', 'tv', 'volume'],
            sizes_px: [24]
        }, {
            name: 'volume_up',
            version: 11,
            popularity: 6684,
            codepoint: 57424,
            unsupported_families: [],
            categories: ['av'],
            tags: ['audio', 'control', 'music', 'sound', 'speaker', 'tv', 'up', 'volume'],
            sizes_px: [24]
        }, {
            name: 'volunteer_activism',
            version: 8,
            popularity: 4185,
            codepoint: 60016,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['activism', 'donation', 'fingers', 'gesture', 'giving', 'hand', 'hands', 'heart', 'love', 'sharing', 'volunteer'],
            sizes_px: [20, 24]
        }, {
            name: 'vpn_key',
            version: 10,
            popularity: 6291,
            codepoint: 57562,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['code', 'key', 'lock', 'network', 'passcode', 'password', 'unlock', 'vpn'],
            sizes_px: [24]
        }, {
            name: 'vpn_lock',
            version: 15,
            popularity: 779,
            codepoint: 58927,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['earth', 'globe', 'lock', 'locked', 'network', 'password', 'privacy', 'private', 'protection', 'safety', 'secure', 'security', 'virtual', 'vpn', 'world'],
            sizes_px: [24]
        }, {
            name: 'vrpano',
            version: 8,
            popularity: 308,
            codepoint: 61570,
            unsupported_families: [],
            categories: ['image'],
            tags: ['angle', 'image', 'landscape', 'mountain', 'mountains', 'panorama', 'photo', 'photography', 'picture', 'view', 'vrpano', 'wide'],
            sizes_px: [24]
        }, {
            name: 'wallpaper',
            version: 11,
            popularity: 725,
            codepoint: 57788,
            unsupported_families: [],
            categories: ['device'],
            tags: ['background', 'image', 'landscape', 'photo', 'photography', 'picture', 'wallpaper'],
            sizes_px: [24]
        }, {
            name: 'warning',
            version: 12,
            popularity: 11813,
            codepoint: 57346,
            unsupported_families: [],
            categories: ['alert'],
            tags: ['!', 'alert', 'attention', 'caution', 'danger', 'error', 'exclamation', 'important', 'mark', 'notification', 'symbol', 'triangle', 'warning'],
            sizes_px: [24]
        }, {
            name: 'warning_amber',
            version: 11,
            popularity: 5427,
            codepoint: 61571,
            unsupported_families: [],
            categories: ['alert'],
            tags: ['!', 'alert', 'amber', 'attention', 'caution', 'danger', 'error', 'exclamation', 'important', 'mark', 'notification', 'symbol', 'triangle', 'warning'],
            sizes_px: [24]
        }, {
            name: 'wash',
            version: 6,
            popularity: 459,
            codepoint: 61873,
            unsupported_families: [],
            categories: ['places'],
            tags: ['bathroom', 'clean', 'fingers', 'gesture', 'hand', 'wash', 'wc'],
            sizes_px: [24]
        }, {
            name: 'watch',
            version: 10,
            popularity: 853,
            codepoint: 58164,
            unsupported_families: [],
            categories: ['hardware'],
            tags: ['Android', 'OS', 'ar', 'clock', 'gadget', 'iOS', 'time', 'vr', 'watch', 'wearables', 'web', 'wristwatch'],
            sizes_px: [24]
        }, {
            name: 'watch_later',
            version: 12,
            popularity: 6349,
            codepoint: 59684,
            unsupported_families: [],
            categories: ['action'],
            tags: ['clock', 'date', 'later', 'schedule', 'time', 'watch'],
            sizes_px: [24]
        }, {
            name: 'water',
            version: 8,
            popularity: 1162,
            codepoint: 61572,
            unsupported_families: [],
            categories: ['device'],
            tags: ['aqua', 'beach', 'lake', 'ocean', 'river', 'water', 'waves', 'weather'],
            sizes_px: [24]
        }, {
            name: 'water_damage',
            version: 4,
            popularity: 410,
            codepoint: 61955,
            unsupported_families: [],
            categories: ['places'],
            tags: ['architecture', 'building', 'damage', 'drop', 'droplet', 'estate', 'house', 'leak', 'plumbing', 'real', 'residence', 'residential', 'shelter', 'water'],
            sizes_px: [24]
        }, {
            name: 'water_drop',
            version: 1,
            popularity: 2129,
            codepoint: 59288,
            unsupported_families: [],
            categories: ['social'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'waterfall_chart',
            version: 9,
            popularity: 654,
            codepoint: 59904,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['analytics', 'bar', 'chart', 'data', 'diagram', 'graph', 'infographic', 'measure', 'metrics', 'statistics', 'tracking', 'waterfall'],
            sizes_px: [24]
        }, {
            name: 'waves',
            version: 9,
            popularity: 1097,
            codepoint: 57718,
            unsupported_families: [],
            categories: ['content'],
            tags: ['beach', 'lake', 'ocean', 'pool', 'river', 'sea', 'swim', 'water', 'wave', 'waves'],
            sizes_px: [24]
        }, {
            name: 'waving_hand',
            version: 1,
            popularity: 1132,
            codepoint: 59238,
            unsupported_families: [],
            categories: ['social'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'wb_auto',
            version: 10,
            popularity: 122,
            codepoint: 58412,
            unsupported_families: [],
            categories: ['image'],
            tags: ['A', 'W', 'alphabet', 'auto', 'automatic', 'balance', 'character', 'edit', 'editing', 'font', 'image', 'letter', 'photo', 'photography', 'symbol', 'text', 'type', 'white', 'wp'],
            sizes_px: [24]
        }, {
            name: 'wb_cloudy',
            version: 10,
            popularity: 772,
            codepoint: 58413,
            unsupported_families: [],
            categories: ['image'],
            tags: ['balance', 'cloud', 'cloudy', 'edit', 'editing', 'white', 'wp'],
            sizes_px: [24]
        }, {
            name: 'wb_incandescent',
            version: 10,
            popularity: 857,
            codepoint: 58414,
            unsupported_families: [],
            categories: ['image'],
            tags: ['balance', 'bright', 'edit', 'editing', 'incandescent', 'light', 'lighting', 'setting', 'settings', 'white', 'wp'],
            sizes_px: [24]
        }, {
            name: 'wb_iridescent',
            version: 9,
            popularity: 163,
            codepoint: 58422,
            unsupported_families: [],
            categories: ['image'],
            tags: ['balance', 'bright', 'edit', 'editing', 'iridescent', 'light', 'lighting', 'setting', 'settings', 'white', 'wp'],
            sizes_px: [24]
        }, {
            name: 'wb_shade',
            version: 8,
            popularity: 180,
            codepoint: 59905,
            unsupported_families: [],
            categories: ['image'],
            tags: ['balance', 'house', 'light', 'lighting', 'shade', 'wb', 'white'],
            sizes_px: [24]
        }, {
            name: 'wb_sunny',
            version: 10,
            popularity: 2781,
            codepoint: 58416,
            unsupported_families: [],
            categories: ['image'],
            tags: ['balance', 'bright', 'light', 'lighting', 'sun', 'sunny', 'wb', 'white'],
            sizes_px: [24]
        }, {
            name: 'wb_twilight',
            version: 7,
            popularity: 297,
            codepoint: 57798,
            unsupported_families: [],
            categories: ['image'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'wc',
            version: 9,
            popularity: 1302,
            codepoint: 58941,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['bathroom', 'closet', 'female', 'male', 'man', 'restroom', 'room', 'wash', 'water', 'wc', 'women'],
            sizes_px: [24]
        }, {
            name: 'web',
            version: 11,
            popularity: 1938,
            codepoint: 57425,
            unsupported_families: [],
            categories: ['av'],
            tags: ['browser', 'internet', 'page', 'screen', 'site', 'web', 'website', 'www'],
            sizes_px: [24]
        }, {
            name: 'web_asset',
            version: 10,
            popularity: 761,
            codepoint: 57449,
            unsupported_families: [],
            categories: ['av'],
            tags: ['-website', 'app', 'application desktop', 'asset', 'browser', 'design', 'download', 'image', 'interface', 'internet', 'layout', 'screen', 'site', 'ui', 'ux', 'video', 'web', 'website', 'window', 'www'],
            sizes_px: [24]
        }, {
            name: 'web_asset_off',
            version: 2,
            popularity: 175,
            codepoint: 58615,
            unsupported_families: [],
            categories: ['av'],
            tags: ['asset', 'browser', 'disabled', 'enabled', 'internet', 'off', 'on', 'page', 'screen', 'slash', 'web', 'webpage', 'website', 'windows', 'www'],
            sizes_px: [20, 24]
        }, {
            name: 'weekend',
            version: 10,
            popularity: 759,
            codepoint: 57707,
            unsupported_families: [],
            categories: ['content'],
            tags: ['chair', 'couch', 'furniture', 'home', 'living', 'lounge', 'relax', 'room', 'weekend'],
            sizes_px: [24]
        }, {
            name: 'west',
            version: 5,
            popularity: 3076,
            codepoint: 61926,
            unsupported_families: [],
            categories: ['navigation'],
            tags: ['arrow', 'directional', 'left', 'maps', 'navigation', 'west'],
            sizes_px: [24]
        }, {
            name: 'whatshot',
            version: 12,
            popularity: 1791,
            codepoint: 59406,
            unsupported_families: [],
            categories: ['social'],
            tags: ['arrow', 'circle', 'direction', 'fire', 'frames', 'hot', 'round', 'whatshot'],
            sizes_px: [24]
        }, {
            name: 'wheelchair_pickup',
            version: 6,
            popularity: 295,
            codepoint: 61867,
            unsupported_families: [],
            categories: ['places'],
            tags: ['accessibility', 'accessible', 'body', 'handicap', 'help', 'human', 'person', 'pickup', 'wheelchair'],
            sizes_px: [24]
        }, {
            name: 'where_to_vote',
            version: 14,
            popularity: 1000,
            codepoint: 57719,
            unsupported_families: [],
            categories: ['content'],
            tags: ['approve', 'ballot', 'check', 'complete', 'destination', 'direction', 'done', 'location', 'maps', 'mark', 'ok', 'pin', 'place', 'poll', 'select', 'stop', 'tick', 'to', 'validate election', 'verified', 'vote', 'where', 'yes'],
            sizes_px: [24]
        }, {
            name: 'widgets',
            version: 11,
            popularity: 2539,
            codepoint: 57789,
            unsupported_families: [],
            categories: ['device'],
            tags: ['app', 'box', 'menu', 'setting', 'squares', 'ui', 'widgets'],
            sizes_px: [24]
        }, {
            name: 'wifi',
            version: 10,
            popularity: 5318,
            codepoint: 58942,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['connection', 'data', 'internet', 'network', 'scan', 'service', 'signal', 'wifi', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'wifi_calling',
            version: 9,
            popularity: 250,
            codepoint: 61303,
            unsupported_families: [],
            categories: ['communication'],
            tags: ['call', 'calling', 'cell', 'connect', 'connection', 'connectivity', 'contact', 'device', 'hardware', 'mobile', 'phone', 'signal', 'telephone', 'wifi', 'wireless'],
            sizes_px: [20, 24]
        }, {
            name: 'wifi_calling_3',
            version: 8,
            popularity: 276,
            codepoint: 61573,
            unsupported_families: [],
            categories: ['device'],
            tags: ['3', 'calling', 'cell', 'cellular', 'data', 'internet', 'mobile', 'network', 'phone', 'speed', 'wifi', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'wifi_lock',
            version: 11,
            popularity: 278,
            codepoint: 57825,
            unsupported_families: [],
            categories: ['device'],
            tags: ['cellular', 'connection', 'data', 'internet', 'lock', 'locked', 'mobile', 'network', 'password', 'privacy', 'private', 'protection', 'safety', 'secure', 'security', 'service', 'signal', 'wifi', 'wireless'],
            sizes_px: [20, 24]
        }, {
            name: 'wifi_off',
            version: 10,
            popularity: 1332,
            codepoint: 58952,
            unsupported_families: [],
            categories: ['notification'],
            tags: ['connection', 'data', 'disabled', 'enabled', 'internet', 'network', 'off', 'offline', 'on', 'scan', 'service', 'signal', 'slash', 'wifi', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'wifi_protected_setup',
            version: 10,
            popularity: 774,
            codepoint: 61692,
            unsupported_families: [],
            categories: ['action'],
            tags: ['around', 'arrow', 'arrows', 'protected', 'rotate', 'setup', 'wifi'],
            sizes_px: [20, 24]
        }, {
            name: 'wifi_tethering',
            version: 10,
            popularity: 819,
            codepoint: 57826,
            unsupported_families: [],
            categories: ['device'],
            tags: ['cell', 'cellular', 'connection', 'data', 'internet', 'mobile', 'network', 'phone', 'scan', 'service', 'signal', 'speed', 'tethering', 'wifi', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'wifi_tethering_error_rounded',
            version: 8,
            popularity: 225,
            codepoint: 61574,
            unsupported_families: [],
            categories: ['device'],
            tags: ['!', 'alert', 'attention', 'caution', 'cell', 'cellular', 'connection', 'danger', 'data', 'error', 'exclamation', 'important', 'internet',
                'mark', 'mobile', 'network', 'notification', 'phone', 'rounded', 'scan', 'service', 'signal', 'speed', 'symbol', 'tethering',
                'warning', 'wifi', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'wifi_tethering_off',
            version: 8,
            popularity: 175,
            codepoint: 61575,
            unsupported_families: [],
            categories: ['device'],
            tags: ['cell', 'cellular', 'connection', 'data', 'disabled', 'enabled', 'internet', 'mobile', 'network', 'off', 'offline', 'on', 'phone', 'scan', 'service', 'signal', 'slash', 'speed', 'tethering', 'wifi', 'wireless'],
            sizes_px: [24]
        }, {
            name: 'window',
            version: 7,
            popularity: 866,
            codepoint: 61576,
            unsupported_families: [],
            categories: ['search'],
            tags: ['close', 'glass', 'grid', 'home', 'house', 'interior', 'layout', 'outside', 'window'],
            sizes_px: [24]
        }, {
            name: 'wine_bar',
            version: 4,
            popularity: 777,
            codepoint: 61928,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['alcohol', 'bar', 'cocktail', 'cup', 'drink', 'glass', 'liquor', 'wine'],
            sizes_px: [24]
        }, {
            name: 'work',
            version: 10,
            popularity: 7918,
            codepoint: 59641,
            unsupported_families: [],
            categories: ['action'],
            tags: ['-briefcase', 'bag', 'baggage', 'business', 'case', 'job', 'suitcase', 'work'],
            sizes_px: [24]
        }, {
            name: 'work_off',
            version: 10,
            popularity: 443,
            codepoint: 59714,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bag', 'baggage', 'briefcase', 'business', 'case', 'disabled', 'enabled', 'job', 'off', 'on', 'slash', 'suitcase', 'work'],
            sizes_px: [24]
        }, {
            name: 'work_outline',
            version: 10,
            popularity: 4016,
            codepoint: 59715,
            unsupported_families: [],
            categories: ['action'],
            tags: ['bag', 'baggage', 'briefcase', 'business', 'case', 'job', 'suitcase', 'work'],
            sizes_px: [24]
        }, {
            name: 'workspaces',
            version: 7,
            popularity: 1031,
            codepoint: 57760,
            unsupported_families: [],
            categories: ['file'],
            tags: [],
            sizes_px: [20, 24]
        }, {
            name: 'wrap_text',
            version: 11,
            popularity: 181,
            codepoint: 57947,
            unsupported_families: [],
            categories: ['editor'],
            tags: ['arrow writing', 'doc', 'edit', 'editing', 'editor', 'sheet', 'spreadsheet', 'text', 'type', 'wrap', 'write', 'writing'],
            sizes_px: [24]
        }, {
            name: 'wrong_location',
            version: 15,
            popularity: 401,
            codepoint: 61304,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['cancel', 'close', 'destination', 'direction', 'exit', 'location', 'maps', 'no', 'pin', 'place', 'quit', 'remove', 'stop', 'wrong', 'x'],
            sizes_px: [20, 24]
        }, {
            name: 'wysiwyg',
            version: 6,
            popularity: 2002,
            codepoint: 61891,
            unsupported_families: [],
            categories: ['action'],
            tags: ['composer', 'mode', 'screen', 'site', 'software', 'system', 'text', 'view', 'visibility', 'web', 'website', 'window', 'wysiwyg'],
            sizes_px: [24]
        }, {
            name: 'yard',
            version: 7,
            popularity: 1207,
            codepoint: 61577,
            unsupported_families: [],
            categories: ['search'],
            tags: ['backyard', 'flower', 'garden', 'home', 'house', 'nature', 'pettle', 'plants', 'yard'],
            sizes_px: [24]
        }, {
            name: 'youtube_searched_for',
            version: 10,
            popularity: 1422,
            codepoint: 59642,
            unsupported_families: [],
            categories: ['action'],
            tags: ['arrow', 'back', 'backwards', 'find', 'glass', 'history', 'inprogress', 'load', 'loading', 'look', 'magnify', 'magnifying', 'refresh', 'renew', 'restore', 'reverse', 'rotate', 'search', 'see', 'youtube'],
            sizes_px: [24]
        }, {
            name: 'zoom_in',
            version: 9,
            popularity: 4680,
            codepoint: 59647,
            unsupported_families: [],
            categories: ['action'],
            tags: ['big', 'bigger', 'find', 'glass', 'grow', 'in', 'look', 'magnify', 'magnifying', 'plus', 'scale', 'search', 'see', 'size', 'zoom'],
            sizes_px: [24]
        }, {
            name: 'zoom_out',
            version: 9,
            popularity: 1952,
            codepoint: 59648,
            unsupported_families: [],
            categories: ['action'],
            tags: ['find', 'glass', 'look', 'magnify', 'magnifying', 'minus', 'negative', 'out', 'scale', 'search', 'see', 'size', 'small', 'smaller', 'zoom'],
            sizes_px: [24]
        }, {
            name: 'zoom_out_map',
            version: 15,
            popularity: 1583,
            codepoint: 58731,
            unsupported_families: [],
            categories: ['maps'],
            tags: ['arrow', 'arrows', 'destination', 'location', 'maps', 'move', 'out', 'place', 'stop', 'zoom'],
            sizes_px: [24]
        }
    ];
    iconCategories: string[] = ['all', 'av', 'image', 'device', 'maps', 'action', 'communication', 'social', 'places', 'notification',
        'content', 'alert', 'editor', 'navigation', 'file', 'search', 'hardware', 'toggle', 'home'];
    iconSearchText = '';
    iconCategory = 'all';
    iconList: string[] = [];


    /** list of banks */
    protected icons: MaterialIconModel[] = this.iconData;

    /** control for the selected bank */
    public iconCtrl: FormControl = new FormControl();

    /** control for the MatSelect filter keyword */
    public iconFilterCtrl: FormControl = new FormControl();

    /** list of banks filtered by search keyword */
    public filteredIcon: ReplaySubject<MaterialIconModel[]> = new ReplaySubject<MaterialIconModel[]>(1);

    @ViewChild('singleSelect') singleSelect: MatSelect;

    /** Subject that emits when the component has been destroyed. */
    public onDestroy = new Subject<void>();

  constructor() {
  }

  ngOnInit(): void {
      // set initial selection
      this.iconCtrl.setValue(this.icons[10]);

      // load the initial bank list
      this.filteredIcon.next(this.icons.slice());

      // listen for search field value changes
      this.iconFilterCtrl.valueChanges
          .pipe(takeUntil(this.onDestroy))
          .subscribe(() => {
              this.filterBanks();
          });
  }

    ngAfterViewInit(): void {
        this.setInitialValue();
    }

    ngOnDestroy(): void {
        this.onDestroy.next();
        this.onDestroy.complete();
    }

    /**
     * Sets the initial value after the filteredBanks are loaded initially
     */
    setInitialValue(): void {
        this.filteredIcon
            .pipe(take(1), takeUntil(this.onDestroy))
            .subscribe(() => {
                this.singleSelect.compareWith = (a: MaterialIconModel, b: MaterialIconModel) => a && b && a.name === b.name;
            });
    }

   filterBanks(): void {
        if (!this.icons) {
            return;
        }
        // get the search keyword
        let search = this.iconFilterCtrl.value;
        if (!search) {
            this.filteredIcon.next(this.icons.slice());
            return;
        } else {
            search = search.toLowerCase();
        }
        // filter the banks
        this.filteredIcon.next(
            this.icons.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
        );
   }

  }
