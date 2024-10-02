"use client";

import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import GradeTable from "../GradeTable";

export default function UniversitySemesterSection(
  {title, data}: {title: string, data: {uc: string; grade: number; ects: string; projects?: {name: string; url: string; weburl?: string}[]}[]}
) {
    return (
        <Accordion>
            <AccordionPanel>
                <AccordionTitle className="text-md"> {title} </AccordionTitle>
                <AccordionContent>
                    <GradeTable data={data}/>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    )
}
