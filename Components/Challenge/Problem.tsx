import { Question } from "../Common/Variables";

interface Example {
  input: string;
  output: string;
  explanation?: string;
}

interface DSAQuestion {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  examples: Example[];
  constraints?: string[];
  tags?: string[];
}

export default function Problem() {
  const question: DSAQuestion | undefined = Question[1];

  if (!question) return <div>No question found.</div>;

  return (
    <div className="p-4 space-y-4 bg-zinc-900 text-white  overflow-y-scroll m-3 border rounded-lg border-gray-700 mr-0">
      <div className="text-xl font-bold mt-3">
        {question.id + ". "}
        {question.title}
      </div>
      <div className="tags">
        <span
          key={question.id}
          className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
        >
          {question.difficulty}
        </span>

        {question.tags?.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-700 text-white px-2 py-1 rounded mr-2"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="text-gray-300 mt-4">
        <p>{question.description}</p>
      </div>
      <div>
        {question.examples.map((example, index) => (
          <div key={index} className="mt-4">
            <h2 className="text-lg font-semibold">Example {index + 1}</h2>
            <div className="bg-gray-800 p-4 rounded mt-2">
              <pre className="text-sm text-gray-200">
                <span className="text-gray-400">Input: </span>
                <code>{example.input}</code>
              </pre>
            </div>
            <div className="bg-gray-800 p-4 rounded mt-2">
              <pre className="text-sm text-gray-200">
                <span className="text-gray-400">Output: </span>
                <code>{example.output}</code>
              </pre>
            </div>
            {example.explanation && (
              <div>
                <p className="text-sm text-gray-400 mt-2">
                  <strong>Explanation:</strong> {example.explanation}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="">
        <div className="text-white font-semibold">Constraints</div>
        <div className="mt-2">
          {question.constraints?.map((constraint, index) => (
            <div
              key={index}
              className="flex items-start space-x-2 text-white text-sm mt-2"
            >
              <span className="text-lg">•</span>
              <span className="bg-gray-800 rounded-xl p-2">{constraint}</span>
            </div>
          )) || <div className="text-gray-400">No constraints provided.</div>}
        </div>
      </div>
    </div>
  );
}
