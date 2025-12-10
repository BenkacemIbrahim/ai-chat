export function ProductivitySection() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">CHATAI Productivity Tools</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Enhance your workflow with these CHATAI-powered features:
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Summarization</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Quickly summarize long documents or conversations with AI-powered analysis.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Translation</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Translate text between multiple languages with high accuracy and context awareness.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Code Generation</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Generate code snippets and solutions based on your specific requirements.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Content Creation</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Generate creative content such as blog posts, social media updates, and marketing copy.
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          These tools are designed to help you be more efficient and productive in your daily tasks.
        </p>
      </div>
    </div>
  )
}
