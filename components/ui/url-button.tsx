import { Button } from "@/components/ui/button";

export default function UrlButton({
  href,
  children,
  variant,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  // eslint-disable-next-line
  props?: any;
}) {
  return (
    <Button variant={variant} onClick={() => {window.open(href)}} {...props}>{children}</Button>
  );
}