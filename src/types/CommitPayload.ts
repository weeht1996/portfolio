export interface CommitPayload {
  sha: string
  node_id: string
  commit: {
    author: {
      name: string
      email: string
      date: string // ISO 8601 format
    }
    committer: {
      name: string
      email: string
      date: string // ISO 8601 format
    }
    message: string
    tree: {
      sha: string
      url: string
    }
    url: string
    comment_count: number
    verification: {
      verified: boolean
      reason: string
      signature: string | null
      payload: string | null
      verified_at: string | null // Nullable ISO 8601 format
    }
  }
  url: string
  html_url: string
  comments_url: string
  author: {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    user_view_type: string
    site_admin: boolean
  } | null
  committer: {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    user_view_type: string
    site_admin: boolean
  } | null
  parents: {
    sha: string
    url: string
    html_url: string
  }[]
}
