import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getJob(id) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/jobs`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch jobs');
    }
    
    const jobs = await response.json();
    const job = jobs.find(job => job.id === parseInt(id));
    
    if (!job) {
      return null;
    }
    
    return job;
  } catch (error) {
    console.error('Error fetching job:', error);
    return null;
  }
}

export default async function JobDetail({ params }) {
  // Await params for Next.js 15 compatibility
  const resolvedParams = await params;
  const job = await getJob(resolvedParams.id);
  
  if (!job) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Jobs */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Jobs
          </Link>
        </div>

        {/* Job Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {job.title}
              </h1>
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-lg">{job.location}</span>
              </div>
            </div>
            
            <div className="mt-4 md:mt-0">
              <Link
                href={`/jobs/${job.id}/apply`}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Apply Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Job Description */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Description</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {job.description}
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Position</h3>
              <p className="text-gray-600">{job.title}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">{job.location}</p>
            </div>
            <div className="md:col-span-2">
              <h3 className="font-medium text-gray-900 mb-2">Job ID</h3>
              <p className="text-gray-600 font-mono">#{job.id}</p>
            </div>
          </div>
        </div>

        {/* Apply CTA */}
        <div className="bg-blue-50 rounded-lg p-8 text-center mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Apply?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Take the next step in your career and apply for the {job.title} position. 
            We&apos;re excited to review your application!
          </p>
          <Link
            href={`/jobs/${job.id}/apply`}
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Apply for This Position
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
