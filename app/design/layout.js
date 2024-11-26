import "/app/globals.css"; // Import CSS specific to this route

export default function DesignLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
