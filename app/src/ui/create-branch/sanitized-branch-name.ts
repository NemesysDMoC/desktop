/** Sanitize a proposed branch name by replacing illegal characters. */
export function sanitizedBranchName(name: string): string {
  // See https://www.kernel.org/pub/software/scm/git/docs/git-check-ref-format.html
  // ASCII Control chars and space, DEL, ~ ^ : ? * [ \
  // | " < and > is technically a valid refname but not on Windows
  // the magic sequence @{, consecutive dots, leading and trailing dot, ref ending in .lock
  return name.replace(/[\x00-\x20\x7F~^:?*\[\\|""<>]|@{|\.\.+|^\.|\.$|\.lock$|\/$/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-/g, '')
}
