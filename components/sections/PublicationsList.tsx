import PublicationCard from "../PublicationCard";

export default function PublicationsList() {
  const publications = [
    {
      title:
        "Latent diffusion models for Privacy-preserving Medical Case-based Explanations",
      authors: ", L. Petrychenko, L. F. Teixeira, W. Silva",
      year: "2024",
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
      bibtex: `@mastersthesis{fcampos-thesis,
    title = {Conditional Diffusion Models for Visual Anonymization of Medical Case-based Explanations},
    author = {Filipe Campos},
    year = 2024,
    month = {July},
    note = {Available at \\url{https://hdl.handle.net/10216/161023}},
    school = {Faculdade de Engenharia, Universidade do Porto},
    type = {Master's thesis}
  }`,
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
    {
      title: "Mobile App using Object Detection for Car Driving",
      authors: ", F. Cerqueira, V. Alves, R. Cruz",
      year: "2022",
      where: "28th Portuguese Conference on Pattern Recognition (RECPAD 2022)",
      link: "http://mobilecardriving.papers.filipepcampos.com/",
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
            url={publication.link}
            where={publication.where}
            bibtex={publication.bibtex}
          />
        );
      })}
    </div>
  );
}
