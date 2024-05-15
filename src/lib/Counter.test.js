import { render } from '@testing-library/svelte';

import Counter from './Counter';

describe('Counter testing jest with ts', () => {
	test('should render', () => {
		const { container } = render(Counter);
		expect(container).toMatchSnapshot();
	});
});
