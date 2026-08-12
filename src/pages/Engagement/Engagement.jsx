import React, { useState } from 'react';
import { Landmark, Users, FileCheck, Lightbulb, TrendingUp, Handshake } from 'lucide-react';
import Container from '../../components/common/Container';
import SectionHeading from '../../components/common/SectionHeading';
import MediaCard from '../../components/cards/MediaCard';
import Lightbox from '../../components/gallery/Lightbox';
import { galleryItems } from '../../data/gallery';

const engagementPillars = [
  {
    icon: Landmark,
    title: "Government Engagement",
    desc: "Active participation in consultations with state renewable energy agencies, CREDA, MNRE, and departmental authorities."
  },
  {
    icon: Users,
    title: "Industry Collaboration",
    desc: "Unifying solar installers, manufacturers, EPC contractors, and business developers under an equitable welfare association."
  },
  {
    icon: FileCheck,
    title: "Policy Support",
    desc: "Providing empirical feedback, policy representations, and regulatory submissions to refine renewable energy directives."
  },
  {
    icon: Lightbulb,
    title: "Renewable Energy Awareness",
    desc: "Conducting forums, seminars, and technical workshops on rooftop solar incentives, net-metering, and clean energy tech."
  },
  {
    icon: TrendingUp,
    title: "Investment Facilitation",
    desc: "Highlighting pan-India clean energy opportunities and connecting project developers with institutional investors."
  },
  {
    icon: Handshake,
    title: "Stakeholder Coordination",
    desc: "Facilitating constructive dialogue with state power distribution companies (DISCOMs) to streamline grid approvals."
  }
];

export default function Engagement() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  // Select top engagement highlight photos
  const engagementPhotos = galleryItems.slice(0, 8);
  const currentPhotoItem = selectedPhotoIndex !== null ? engagementPhotos[selectedPhotoIndex] : null;

  return (
    <div className="py-12 md:py-16 bg-bg">
      <Container>
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 bg-secondary/10 text-secondary">
            <Users className="w-4 h-4 text-secondary" />
            <span>Active Outreach</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-primary tracking-tight leading-tight mb-4">
            Engagement & Impact
          </h1>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Demonstrating real-world stakeholder coordination, policy dialogue, and ecosystem representation across the renewable energy landscape.
          </p>
        </div>

        {/* 6 Engagement Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {engagementPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{pillar.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engagement Real-World Photo Highlights */}
        <div>
          <SectionHeading
            eyebrow="On-The-Ground Documentation"
            title="Engagement Highlights & Field Action"
            description="Our work involves continuous collaboration with DISCOM officers, state renewable energy bodies, and business leaders."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagementPhotos.map((item, idx) => (
              <MediaCard key={item.id} item={item} onClick={() => setSelectedPhotoIndex(idx)} />
            ))}
          </div>

          {currentPhotoItem && (
            <Lightbox
              item={currentPhotoItem}
              onClose={() => setSelectedPhotoIndex(null)}
              onPrev={() => setSelectedPhotoIndex(prev => Math.max(0, prev - 1))}
              onNext={() => setSelectedPhotoIndex(prev => Math.min(engagementPhotos.length - 1, prev + 1))}
              hasPrev={selectedPhotoIndex > 0}
              hasNext={selectedPhotoIndex < engagementPhotos.length - 1}
            />
          )}
        </div>
      </Container>
    </div>
  );
}
