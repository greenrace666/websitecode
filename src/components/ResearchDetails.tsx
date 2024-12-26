import React from 'react';
import { Dna, Brain, Database, Microscope,Pill,Laptop } from 'lucide-react';
import { ResearchCard } from './ui/ResearchCard';

const ResearchDetails = () => {
  const specializations = [
    {
      icon: Dna,
      title: 'Protein Structure Prediciton,Design & Engineering',
      description: 'Learning computational protein design using state-of-the-art ML models',
      topics: ['Alphafold', 'RFDiffusion', 'Bindcraft']
    },
    {
      icon: Pill,
      title: 'Drug Design',
      description: 'Learning the use of computational tools in drug design',
      topics: ['Virtual Screening', 'Molecular Docking', 'Lead Optimization','Molecular Dynamics','Small Molecule Diffusion models']
    },
    {
      icon: Laptop,
      title: 'Softwares',
      description: 'Learning the various softwares used in computational biology',
      topics: ['ChimeraX', 'MOE', 'Pymol','VMD']
    },
    {
      icon: Database,
      title: 'Bioinformatics',
      description: 'Learning the use of bioinformatics tools',
      topics: ['BLAST', 'PDB', 'MSA','Phylogeny']
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-bold mb-8">Skills</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {specializations.map((spec, index) => (
            <ResearchCard key={index} specialization={spec} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchDetails;