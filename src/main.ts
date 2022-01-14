import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as Sentry from "@sentry/angular";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: "https://7f359e21065040feb72672697a688b84@o1115047.ingest.sentry.io/6146710",
  integrations: [
    new Integrations.BrowserTracing({
      tracingOrigins: ["localhost", "https://sentry-mocha.vercel.app/"],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
  ],
  release: 'sentry@2.0.0',
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
