import { render } from '@testing-library/svelte';

import Comp from './Comp.svelte';

test('renders Hola mundo', () => {
	const { getByText } = render(Comp);
	const linkElement = getByText('Hola mundo');
	expect(linkElement).toBeDefined();
});
