import { ClientShell } from '@/components/shell/ClientShell'

export default function ShellLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientShell>{children}</ClientShell>
}
