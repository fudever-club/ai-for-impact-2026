import React from 'react';
import { Locale, CompetitionViewModel } from '../../content/types';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Users, Code, Database, Shield, LineChart, AlertCircle, Lock } from 'lucide-react';

interface TeamRolesSectionProps {
  locale: Locale;
  content: CompetitionViewModel;
}

export const TeamRolesSection: React.FC<TeamRolesSectionProps> = ({
  locale,
  content,
}) => {
  const team = content.teamStructure;
  if (!team) return null;

  const roleIcons = [
    <Code key="1" className="w-6 h-6 text-brand-orange" />,
    <Database key="2" className="w-6 h-6 text-blue-600" />,
    <Shield key="3" className="w-6 h-6 text-emerald-600" />,
    <LineChart key="4" className="w-6 h-6 text-purple-600" />,
  ];

  return (
    <section id="team-roles" className="py-16 sm:py-20 lg:py-24 relative bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={team.badge}
          badgeVariant="orange"
          title={team.title}
          subtitle={team.subtitle}
        />

        {/* Warning Banner */}
        <div className="mb-10 sm:mb-12 max-w-4xl mx-auto glass-card p-4 sm:p-6 rounded-2xl border border-amber-200/90 shadow-card bg-amber-50/50 flex items-start gap-3.5 sm:gap-4">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0 mt-0.5">
            <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="font-display font-bold text-slate-900 text-sm sm:text-base">
              Rủi ro thất bại lớn nhất: &ldquo;Một bạn gánh team&rdquo;
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {team.warningNote}
            </p>
          </div>
        </div>

        {/* 4 Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {team.roles.map((role, idx) => (
            <div
              key={idx}
              className="glass-card p-5 sm:p-7 rounded-2xl border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-brand-orange/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group bg-white"
            >
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
                  {roleIcons[idx] || <Users className="w-5 h-5 sm:w-6 sm:h-6" />}
                </div>

                <h3 className="font-display font-bold text-base text-slate-900 mb-1.5 sm:mb-2 leading-snug">
                  {role.role}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 sm:mb-6">
                  {role.focus}
                </p>
              </div>

              {/* Jury Interview Question Box */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-1">
                <span className="font-mono font-bold text-blue-600 uppercase text-[10px] block">
                  Câu hỏi Giám khảo sẽ hỏi:
                </span>
                <p className="text-slate-800 font-medium italic leading-relaxed text-[11px] sm:text-xs">
                  {role.keyQuestion}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 5th Member Note */}
        <div className="mb-8 sm:mb-10 text-center max-w-2xl mx-auto p-3 sm:p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-xs sm:text-sm text-blue-800 font-medium">
          💡 {team.fifthMemberNote}
        </div>

        {/* Mock Data Security Policy Card */}
        <div className="glass-card p-4 sm:p-7 rounded-2xl border border-blue-200/90 shadow-card max-w-4xl mx-auto bg-gradient-to-r from-blue-50/70 via-white to-sky-50/50 flex items-start gap-3.5 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-100/80 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0 mt-0.5 shadow-xs">
            <Lock className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="space-y-1 sm:space-y-1.5">
            <div className="flex items-center gap-2">
              <h4 className="font-display font-bold text-slate-900 text-sm sm:text-base">
                {team.mockDataPrinciple.title}
              </h4>
              <Badge variant="blue" className="text-[9px] sm:text-[10px]">Quy tắc An toàn</Badge>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {team.mockDataPrinciple.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
