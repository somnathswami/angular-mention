import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { MentionDirective } from './mention.directive';
import { MentionListComponent } from './mention-list.component';
import {UiMaterialComponents} from '../app/ui-material-components';
@NgModule({
    imports: [
        CommonModule,
        UiMaterialComponents
    ],
    exports: [
        MentionDirective,
        MentionListComponent
    ],
    entryComponents: [
        MentionListComponent
    ],
    declarations: [
        MentionDirective,
        MentionListComponent
    ]
})
export class MentionModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MentionModule
        };
    }
}
