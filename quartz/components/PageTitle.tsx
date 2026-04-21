import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { pathToRoot } from "../util/path"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <img src="https://healhooked.github.io/Pocket-Medic/logo.png" style="width: 180px; height: 270px; display: block; margin-bottom: 8px;" />
        <span>{title}</span>
      </a>
    </div>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
}
.page-title a {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
