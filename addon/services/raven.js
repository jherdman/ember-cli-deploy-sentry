import RavenService from 'ember-cli-sentry/services/raven';

import { computed } from '@ember/object';

export default RavenService.extend({
  releaseMetaName: 'sentry:revision',

  release: computed('releaseMetaName', function() {
    let node = document.querySelector(`meta[name='${this.releaseMetaName}']`);

    if (node) {
      return node.content;
    }
  }),
});
