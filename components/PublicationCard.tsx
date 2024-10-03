import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { BibTeXDialog } from "./BibTeXDialog";

export default function PublicationCard({
  title,
  authors,
  year,
  url,
  where,
  bibtex,
  // code_url,
}: {
  title: string;
  authors: string;
  year: string;
  url?: string;
  where: string;
  bibtex?: string;
  // code_url?: string;
}) {
  return (
    <Card className="w-[300px] md:w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <u>F. Campos</u>
          {authors} ({year}) <br />
          {where}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex gap-4">
        {bibtex && <BibTeXDialog bibtex={bibtex} />}
        {/* <Button
          variant="outline"
          className="dark:bg-gray-800"
          onClick={() => {
            window.open(code_url);
          }}
        >
          Code
        </Button> */}
        {url && (
          <Button
            onClick={() => {
              window.open(url);
            }}
          >
            Read
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
