import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function BibTeXDialog({ bibtex }: { bibtex: string }) {
  const { toast } = useToast();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bibtex);
    toast({
      title: "Copied to clipboard",
      description: "The BibTeX entry was copied to the clipboard.",
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="dark:bg-gray-800">
          BibTeX
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>BibTeX</AlertDialogTitle>
          <AlertDialogDescription>
            If you want to cite this work, you can use the following BibTeX
            entry:
            <br />
            <Textarea className="mt-2" value={bibtex} wrap="off" />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={copyToClipboard}>
            Copy to Clipboard
          </AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
