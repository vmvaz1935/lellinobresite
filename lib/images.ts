export function getOfficeImagePath(): string {
  const envPath = process.env.NEXT_PUBLIC_OFFICE_IMAGE;
  return envPath && envPath.trim().length > 0
    ? envPath
    : '/images/brand/logo-lelli-nobre.webp';
}


