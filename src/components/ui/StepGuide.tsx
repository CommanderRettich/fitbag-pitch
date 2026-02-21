interface Step {
  title: string;
  description: string;
  code?: string;
}

interface StepGuideProps {
  steps: Step[];
}

export function StepGuide({ steps }: StepGuideProps) {
  return (
    <div className="space-y-4 my-4">
      {steps.map((step, i) => (
        <div key={i} className="flex gap-3 items-start">
          <div className="w-7 h-7 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
            {i + 1}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold">{step.title}</p>
            <p className="text-sm text-muted mt-1">{step.description}</p>
            {step.code && (
              <pre className="mt-2 p-3 bg-bg rounded-lg text-xs overflow-x-auto border border-border">
                <code>{step.code}</code>
              </pre>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
