import { Component } from '@angular/core';  // Import the Component class
import { bootstrap } from '@angular/platform-browser-dynamic'; // Import the bootstrap 
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated'; // Import the Routers


import { InspectorComponent } from './inspector.component';
import { ResultComponent } from './result.component';
import { MetroService } from './metro.service';


@Component({
    
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, MetroService],
    template: '<div><h1>AMERICAN SOCIETY OF HOME INSPECTOR</h1><router-outlet></router-outlet></div>'
})

@RouteConfig([
	{
		path: '/',
		name: 'Find',
		component: InspectorComponent,
		useAsDefault: true
	},
	{
		path: '/result',
		name: 'Result',
		component: ResultComponent
	}
])

export class AppComponent {
    componentName: 'AppComponent';
}
bootstrap(AppComponent);