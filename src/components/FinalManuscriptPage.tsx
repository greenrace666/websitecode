import { useState } from 'react';
import { ArrowLeft, Check, Download, FileText, ShieldAlert, X } from 'lucide-react';
import manuscriptPdf from '/src/finalmanuscript.pdf';

const FinalManuscriptPage = () => {
  const [hasAgreed, setHasAgreed] = useState(false);

  const handleDecline = () => {
    window.location.href = '/';
  };

  const handleAccept = () => {
    setHasAgreed(true);
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-white">
      {/* Disclaimer Window Modal before PDF is loaded */}
      {!hasAgreed && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="disclaimer-title"
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/85 p-4 backdrop-blur-md sm:p-6"
        >
          <div className="relative my-auto flex max-h-[90vh] w-full max-w-2xl flex-col rounded-2xl border border-white/15 bg-slate-900/95 shadow-2xl shadow-black/80 backdrop-blur-xl">
            {/* Header */}
            <div className="flex items-start gap-4 border-b border-white/10 p-6 sm:p-7">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10 text-amber-300">
                <ShieldAlert className="h-6 w-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h2
                  id="disclaimer-title"
                  className="text-lg font-bold tracking-tight text-white sm:text-xl"
                >
                  COPYRIGHT &amp; RESTRICTED USE NOTICE
                </h2>
                <p className="mt-1 text-xs font-medium text-amber-200/80 sm:text-sm">
                  © 2026 Nikil Krishna and Venkatasubramanian Ulaganathan. All Rights Reserved.
                </p>
              </div>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-7">
              <div className="space-y-4 text-xs leading-relaxed text-slate-300 sm:text-sm">
                <p>
                  This manuscript, including all text, figures, tables, illustrations, molecular structures, computational results, analyses, methods, data, and other materials contained herein, is the sole intellectual property of the authors, except where otherwise expressly attributed or stated.
                </p>
                <p>
                  Viewing this document through this website does not grant any license or permission to reproduce, copy, download, distribute, transmit, publish, republish, modify, adapt, translate, extract, commercially exploit, or create derivative works from any part of this work.
                </p>
                <p>
                  No part of this work may be reproduced or redistributed, in whole or in part, by any means or in any form, including electronic or physical reproduction, screenshots, screen recordings, photocopying, scanning, posting to other websites or repositories, incorporation into other publications, or automated extraction, without the prior written permission of the authors.
                </p>
                <p>
                  The document is made available solely for personal, non-commercial viewing and reading through this website. Access to or viewing of this manuscript shall not be interpreted as granting any copyright, publication, reproduction, distribution, adaptation, or other intellectual-property license.
                </p>
                <p>
                  Any permission to reproduce or reuse this work must be expressly granted in writing by the authors. Unauthorized reproduction, redistribution, publication, or other use may constitute copyright infringement and may be subject to applicable legal remedies.
                </p>
                <p className="rounded-lg border border-white/10 bg-white/5 p-3.5 font-medium text-white">
                  By selecting “I Agree,” you acknowledge and agree to these restrictions and may proceed solely to view the manuscript.
                </p>
                <p className="pt-2 text-xs font-semibold tracking-wide text-slate-400">
                  © 2026 Nikil Krishna and Venkatasubramanian Ulaganathan — All Rights Reserved.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col-reverse items-center justify-end gap-3 border-t border-white/10 bg-slate-950/40 p-4 sm:flex-row sm:px-7 sm:py-5">
              <button
                type="button"
                onClick={handleDecline}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 sm:w-auto"
              >
                <X className="h-4 w-4" />
                Decline
              </button>
              <button
                type="button"
                onClick={handleAccept}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-md transition hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 sm:w-auto"
              >
                <Check className="h-4 w-4" />
                I Agree
              </button>
            </div>
          </div>
        </div>
      )}

      <header className="border-b border-white/10 bg-slate-950/95 backdrop-blur">
        <div className="container mx-auto flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Final manuscript</p>
              <h1 className="text-xl font-semibold sm:text-2xl">Read the manuscript online</h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to site
            </a>
            {hasAgreed && (
              <a
                href={manuscriptPdf}
                download
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-4 sm:px-6 lg:py-6">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/30">
          <div className="h-[calc(100vh-9.5rem)] min-h-[32rem] w-full bg-slate-950">
            {hasAgreed ? (
              <iframe
                src={`${manuscriptPdf}#view=FitH`}
                className="h-full w-full border-0"
                title="Final manuscript"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center p-6 text-center text-white/50">
                <div className="flex flex-col items-center gap-3">
                  <ShieldAlert className="h-10 w-10 text-white/30" />
                  <p className="text-sm">Please accept the disclaimer to load and view the manuscript.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default FinalManuscriptPage;
