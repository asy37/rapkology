import { cache } from 'react';

import { QueryClient } from '@tanstack/react-query';

const getQueryClient = cache(() => new QueryClient());
export const queryClient = getQueryClient();

export default getQueryClient;