import Raven from 'raven-js';

const sentry_key = '520c85780dcd4937b201c4a5f0e541fe';
const sentry_app = '1245883';
export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`;

export function logException(ex, context) {
	Raven.captureException(ex, {
		extra: context
	});
	/*eslint no-console:0*/
	window && window.console && console.error && console.error(ex);
}
