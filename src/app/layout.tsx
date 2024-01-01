import { 
  BaseStyles, 
  ThemeProvider 
} from "./reactComponents";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <BaseStyles>{children}</BaseStyles>
        </ThemeProvider>
      </body>
    </html>
  )
}