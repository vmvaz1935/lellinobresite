export function getOfficeImagePath(): string {
  const envPath = process.env.NEXT_PUBLIC_OFFICE_IMAGE;
  return envPath && envPath.trim().length > 0
    ? envPath
    : '/images/office/escritorio-fachada-2025.webp';
}


