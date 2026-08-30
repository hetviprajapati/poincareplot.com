import './page.css';

const faqs = [
  {
    question: 'What is a Poincaré plot in HRV analysis?',
    answer:
      'It graphs each RR interval against the next one, producing a scatter whose shape reveals both short-term and long-term heart rate variability at a glance, rather than reducing it to one number.',
  },
  {
    question: 'What do SD1 and SD2 mean?',
    answer:
      'SD1 is the width of the cloud — short-term variability, closely related to RMSSD. SD2 is the length — longer-term variability. Wider and longer generally means more parasympathetic activity; narrower generally means more sympathetic/stress load.',
  },
  {
    question: 'Who invented the Poincaré plot?',
    answer:
      'The mathematical technique — the Poincaré map, or return map — was developed by Henri Poincaré in the late 19th century for studying dynamical systems. Its use on heart rate data came roughly a century later, most commonly credited to Woo and colleagues in the early 1990s.',
  },
  {
    question: 'Is a Poincaré plot better than RMSSD?',
    answer:
      "They're related, not competing — SD1 and RMSSD come from the same data and correlate closely. The plot's advantage is visual: it can show patterns a single number can't, like distinct clusters from arrhythmia.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a Poincaré plot in HRV analysis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Poincaré plot graphs each RR interval against the very next one (RRi on the x-axis, RRi+1 on the y-axis). Instead of a single number like RMSSD, it produces a scatter of points whose shape reveals both short-term and long-term heart rate variability at a glance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do SD1 and SD2 mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SD1 is the width of the point cloud, reflecting short-term, beat-to-beat variability and correlating closely with RMSSD. SD2 is the length of the cloud, reflecting longer-term variability across the recording. A wide, open cloud generally reflects greater parasympathetic activity; a narrow, tight cloud generally reflects sympathetic dominance or stress.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who invented the Poincaré plot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The underlying mathematical technique, the Poincaré map or return map, was developed by French mathematician Henri Poincaré in the late 19th century to study periodic orbits in dynamical systems. Its application to heart rate data came roughly a century later, most commonly credited to Woo and colleagues in the early 1990s.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a Poincaré plot better than RMSSD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "They're mathematically related rather than competing — SD1 is derived from the same successive-difference data as RMSSD and the two correlate closely. The Poincaré plot's advantage is visual and nonlinear: it can reveal patterns, like arrhythmia clusters or irregular shapes, that a single summary number cannot show.",
      },
    },
  ],
};

export default function PoincarePlotPage() {
  return (
    <main className="poincare-reference-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="poincare-wrap">
        <header className="poincare-site-header">
          <div>POINCARÉ PLOT — HRV REFERENCE</div>

          <div>
            LIVE TOOL:{' '}
            <a href="https://hrv.live/poincare-live" target="_blank" rel="noopener noreferrer">
              poincare.live
            </a>
          </div>
        </header>

        <div className="hero-section">
          <h1>Poincaré Plot</h1>

          <div className="poincare-subtitle">
            A geometric view of heart rate variability — and a mathematical idea a century older than cardiology&apos;s use of it
          </div>
        </div>

        <h2>1. Definition</h2>

        <p>
          A Poincaré plot graphs each RR interval against the very next one: RR<sub>i</sub> on the x-axis, RR<sub>i+1</sub> on the y-axis.
          Rather than reducing variability to a single number, it produces a scatter of points whose overall shape carries information — a
          wide, open cloud reflects high variability; a tight, narrow cloud reflects low variability.
        </p>

        <p>
          Two measures are typically derived from the shape by fitting an ellipse to the point cloud: SD1, the width across the short axis,
          and SD2, the length along the long axis.
        </p>

        <h2>2. History: from dynamical systems to cardiology</h2>

        <div className="poincare-timeline">
          <div className="poincare-timeline-item">
            <span className="poincare-timeline-year">1880s–1890s</span> — French mathematician Henri Poincaré, working on the three-body
            problem in celestial mechanics, developed what became known as the Poincaré map (or return map): a way to study a continuous,
            complex system by taking a lower-dimensional &quot;slice&quot; and observing how points return to it over time. This became a
            foundational tool in the study of dynamical systems and, later, chaos theory — long before anyone applied it to a heartbeat.
          </div>

          <div className="poincare-timeline-item">
            <span className="poincare-timeline-year">Early 1990s</span> — The technique was adapted to cardiology. It is most commonly
            credited to Woo and colleagues, who used it as a qualitative tool to visualize heart rate irregularities caused by arrhythmias —
            different arrhythmia types produce visually distinct cluster patterns on the plot.
          </div>

          <div className="poincare-timeline-item">
            <span className="poincare-timeline-year">1996</span> — Tulppo and colleagues extended the method from a qualitative picture into
            a quantitative one, fitting an ellipse to the point cloud and formalizing the SD1 and SD2 measures still used today.
          </div>

          <div className="poincare-timeline-item">
            <span className="poincare-timeline-year">Since</span> — The Poincaré plot has become a standard nonlinear HRV method, applied
            well beyond arrhythmia detection to general autonomic assessment, sleep research, and exercise physiology.
          </div>
        </div>

        <div className="poincare-note">
          Some literature traces an earlier, non-cardiology application of RR-interval correlation to studies of sleep-wake states in cats,
          predating the more widely cited human arrhythmia work. The exact first use of the plot on cardiac data is not perfectly settled in
          the historical record — what&apos;s well established is that the mathematical technique itself predates its cardiology application
          by roughly a century.
        </div>

        <h2>3. How to read it</h2>

        <p>Three things to look at on any Poincaré plot:</p>

        <ul className="poincare-reading-list">
          <li>
            <strong>Overall size of the cloud</strong> — bigger generally means more variability, in both the short and long term.
          </li>

          <li>
            <strong>Shape</strong> — a healthy resting recording typically forms a comet or elongated ellipse along the identity line (where
            RR<sub>i</sub> = RR<sub>i+1</sub>). Distinct separate clusters, rather than one continuous shape, are a classic visual signature
            of arrhythmia.
          </li>

          <li>
            <strong>Orientation relative to the identity line</strong> — the width perpendicular to that line is SD1; the length along it is
            SD2.
          </li>
        </ul>

        <h2>4. SD1 and SD2 — the formulas</h2>

        <div className="poincare-formula-box">
          SD1 = √( ½ × SDSD² )
          <br />
          SD2 = √( 2 × SDNN² − SD1² )
        </div>

        <p>
          Where SDSD is the standard deviation of the successive RR differences, and SDNN is the standard deviation of the RR intervals
          themselves.
        </p>

        <div className="poincare-example-box">
          <strong>Worked example.</strong> Using the same five RR intervals (ms) as the RMSSD example: 800, 810, 795, 830, 815
          <table>
            <thead>
              <tr>
                <th>Step</th>
                <th>Value</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Mean RR</td>
                <td>810 ms</td>
              </tr>
              <tr>
                <td>SDNN (std dev of RR values)</td>
                <td>≈ 12.6 ms</td>
              </tr>
              <tr>
                <td>Successive differences</td>
                <td>10, −15, 35, −15</td>
              </tr>
              <tr>
                <td>SDSD (std dev of differences)</td>
                <td>≈ 21.2 ms</td>
              </tr>
              <tr>
                <td>SD1</td>
                <td>≈ 15.0 ms</td>
              </tr>
              <tr>
                <td>SD2</td>
                <td>≈ 9.5 ms</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>5. Poincaré plot vs. RMSSD vs. SDNN</h2>

        <div className="poincare-table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>What it captures</th>
                <th>Format</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>RMSSD</td>
                <td>Short-term, beat-to-beat variability</td>
                <td>Single number</td>
              </tr>

              <tr>
                <td>SDNN</td>
                <td>Overall variability across the recording</td>
                <td>Single number</td>
              </tr>

              <tr>
                <td>Poincaré plot</td>
                <td>Both short-term (SD1) and long-term (SD2) variability, plus visual shape/pattern</td>
                <td>Scatter plot + two derived numbers</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          SD1 and RMSSD are mathematically related — both come from the same successive-difference data — and correlate closely in practice.
          The Poincaré plot&apos;s real advantage isn&apos;t a different number; it&apos;s the shape, which can reveal patterns like
          arrhythmia clustering that a single summary statistic can&apos;t show.
        </p>

        <h2>6. Live vs. Averaged</h2>

        <p>
          A traditional Poincaré plot is typically built from a full recording — 5 minutes, an hour, or overnight — and reviewed afterward.
          A live version builds the plot beat by beat, in real time, so the shape itself changes as you watch: narrowing under stress,
          widening as you relax. See it live at{' '}
          <a href="https://hrv.live/poincare-live" target="_blank" rel="noopener noreferrer">
            poincare.live
          </a>
          , using any Bluetooth chest strap.
        </p>

        <div className="poincare-cross-sell">
          For the single-number version of this same RR-interval data, see the RMSSD reference at{' '}
          <a href="https://rmssd.com" target="_blank" rel="noopener noreferrer">
            rmssd.com
          </a>
          , or the live RMSSD dial at{' '}
          <a href="https://hrv.live" target="_blank" rel="noopener noreferrer">
            hrv.live
          </a>
          .
        </div>

        <h2>7. Frequently Asked Questions</h2>

        {faqs.map((faq) => (
          <div className="poincare-faq-item" key={faq.question}>
            <div className="poincare-faq-question">{faq.question}</div>
            <div>{faq.answer}</div>
          </div>
        ))}

        <h2>8. References</h2>

        <ol className="poincare-references">
          <li>
            Woo MA, Stevenson WG, Moser DK, et al. Patterns of beat-to-beat heart rate variability in advanced heart failure.{' '}
            <em>Am Heart J.</em> 1992;123(3):704-710.
          </li>

          <li>
            Tulppo MP, Mäkikallio TH, Takala TE, Seppänen T, Huikuri HV. Quantitative beat-to-beat analysis of heart rate dynamics during
            exercise. <em>Am J Physiol.</em> 1996;271(1 Pt 2):H244-H252.
          </li>

          <li>
            Task Force of the European Society of Cardiology and the North American Society of Pacing and Electrophysiology. Heart rate
            variability: standards of measurement, physiological interpretation, and clinical use. <em>Circulation.</em> 1996;93:1043-1065.
          </li>

          <li>
            Shaffer F, Ginsberg JP. An overview of heart rate variability metrics and norms. <em>Front Public Health.</em> 2017;5:258.
          </li>

          <li>
            Brennan M, Palaniswami M, Kamen P. Do existing measures of Poincaré plot geometry reflect nonlinear features of heart rate
            variability? <em>IEEE Trans Biomed Eng.</em> 2001;48(11):1342-1347.
          </li>
        </ol>

        <footer className="poincare-footer">
          This site aggregates peer-reviewed literature for educational purposes. Not medical advice.
          <br />
          Live display:{' '}
          <a href="https://hrv.live/poincare-live" target="_blank" rel="noopener noreferrer">
            poincare.live
          </a>{' '}
          · Related reference:{' '}
          <a href="https://rmssd.com" target="_blank" rel="noopener noreferrer">
            rmssd.com
          </a>
          <div className="poincare-updated">Last updated: August 2026</div>
        </footer>
      </div>
    </main>
  );
}
