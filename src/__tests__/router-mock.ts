import { config } from '@vue/test-utils';
import { createRouterMock, injectRouterMock } from 'vue-router-mock';

const router = createRouterMock();

beforeEach(() => {
  injectRouterMock(router);
});

config.global.plugins.push(router);
