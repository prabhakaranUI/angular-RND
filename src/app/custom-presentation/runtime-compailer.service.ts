import {
    Compiler,
    Component,
    Injectable,
    ModuleWithComponentFactories,
    NgModule,
    NgModuleFactory,
    Type
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';

export class DynamicTemplate {
    constructor(
        public readonly template: string,
        // tslint:disable-next-line:no-any
        public readonly component: Type<any>,
        // tslint:disable-next-line:no-any
        public readonly moduleFactory?: NgModuleFactory<any>
    ) {
    }
}

@Injectable({
    providedIn: 'root'
})
export class RuntimeCompilerService {
    private compiledModule?: ModuleWithComponentFactories<any>;

    public async createAndCompileTemplate(context, template: string): Promise<DynamicTemplate> {
        const dynamicComponent = Component({ template })(
            class {
                context = context;
            }
        );
        const dynamicModule = NgModule({
            declarations   : [ dynamicComponent ],
            exports        : [ dynamicComponent ],
            entryComponents: [ dynamicComponent ],
            imports        : [ FormsModule, CommonModule, MatCardModule ]
        })(class DynamicModule {
        });

        this.compiledModule = await this.compiler.compileModuleAndAllComponentsAsync(dynamicModule);
        return new DynamicTemplate(template, dynamicComponent, this.compiledModule.ngModuleFactory);
    }

    constructor(private compiler: Compiler) {
    }
}
