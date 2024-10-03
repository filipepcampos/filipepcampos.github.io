import PublicationCard from "../PublicationCard";

export default function PublicationsList() {
  const publications = [
    {
      title:
        "Latent diffusion models for Privacy-preserving Medical Case-based Explanations",
      authors: ", L. Petrychenko, L. F. Teixeira, W. Silva",
      year: "2024",
      link: "#",
      where:
        "EXPLIMED: First Workshop on Explainable Artificial Intelligence for the medical domain, ECAI 2024",
    },
    {
      title:
        "Conditional Diffusion Models for Visual Anonymization of Medical Case-based Explanations",
      authors: "",
      year: "2024",
      link: "https://hdl.handle.net/10216/161023",
      where: "Master's Thesis, University of Porto",
    },
    {
      title: "YOLOMM - You Only Look Once for Multi-modal Multi-tasking",
      authors: ", F. Cerqueira, R. Cruz, J. Cardoso",
      year: "2023",
      link: "https://link.springer.com/chapter/10.1007/978-3-031-49018-7_40",
      where:
        "Iberoamerican Congress on Pattern Recognition 2023 (CIARP), Springer Nature Switzerland",
      bibtex: `@InProceedings{10.1007/978-3-031-49018-7_40,
            author="Campos, Filipe
            and Cerqueira, Francisco Gon{\c{c}}alves
            and Cruz, Ricardo P. M.
            and Cardoso, Jaime S.",
            editor="Vasconcelos, Ver{\'o}nica
            and Domingues, In{\^e}s
            and Paredes, Sim{\~a}o",
            title="YOLOMM -- You Only Look Once for Multi-modal Multi-tasking",
            booktitle="Progress in Pattern Recognition, Image Analysis, Computer Vision, and Applications",
            year="2024",
            publisher="Springer Nature Switzerland",
            address="Cham",
            pages="564--574",
            isbn="978-3-031-49018-7"
            }`,
    },
  ];

  return (
    <div className="flex gap-4 flex-col ml-4">
      {publications.map((publication, idx) => {
        return (
          <PublicationCard
            key={idx}
            title={publication.title}
            authors={publication.authors}
            year={publication.year}
            link={publication.link}
            where={publication.where}
            bibtex={publication.bibtex}
          />
        );
      })}
    </div>
  );
}
