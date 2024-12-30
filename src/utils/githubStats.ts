// Function to generate GitHub stats markdown string
export function generateGitHubStats(username: string, selectedStats: string[]): string {
  const stats: string[] = [];

  // Add basic stats if selected
  if (selectedStats.includes('basic-stats')) {
    stats.push(`![${username}'s GitHub stats](https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical)`);
  }

  // Add top languages if selected
  if (selectedStats.includes('languages')) {
    stats.push(`![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical)`);
  }

  // Add streak stats if selected
  if (selectedStats.includes('streak')) {
    stats.push(`![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=radical)`);
  }

  // Add trophy stats if selected
  if (selectedStats.includes('trophy')) {
    stats.push(`![Trophy](https://github-profile-trophy.vercel.app/?username=${username}&theme=radical&row=1)`);
  }

  return stats.join('\n\n');
}