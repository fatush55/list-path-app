export const pathsRoute = '/paths';
export const pathRoute = (id: string | null = null) => `/path${id ? `/${id}` : ''}`;