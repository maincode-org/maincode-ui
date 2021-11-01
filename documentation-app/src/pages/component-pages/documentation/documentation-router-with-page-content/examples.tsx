export const routeExample = `
const allPages = [...guidePages, ...entityCollection.flatMap((e) => e.pages)];

<Route
  path="/maincode-ui/"
  render={() => (
    <DocumentationRouterWithPageContent pages={allPages} githubUrl={headerGithubURL}>
      <Route path="/maincode-ui/" exact={true} render={() => <Redirect to={allPages?.[0].url} />} />
    </DocumentationRouterWithPageContent>
  )}
/>
`;
