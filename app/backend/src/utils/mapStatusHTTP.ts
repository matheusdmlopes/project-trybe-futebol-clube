export default function mapStatusHTTP(status: string): number {
  switch (status) {
    case 'SUCCESS': return 200;
    case 'UNAUTHORIZED': return 401;
    case 'NOT_FOUND': return 404;

    default: return 500;
  }
}
