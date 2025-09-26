import { useState } from "react"
import clsx from "clsx"
import {
  FiSunrise,
  FiSunset,
  FiHeart,
  FiUser,
  FiCheckSquare,
  FiCheckCircle,
  FiAlertCircle,
  FiSave,
  FiAlertTriangle,
  FiTrash2,
} from "react-icons/fi"

import { DemoFieldsets, DemoFieldset } from "../demos/fieldset"
import { DemoCheckbox } from "../demos/checkbox"

export function ExampleIcon() {
  const [isFit, setIsFit] = useState(false)
  const fitClass = isFit ? "is-fit" : undefined
  const modifiedClasses = clsx(fitClass)
  return (
    <div className="demo-boxes">
      <div className="demo-box">
        <DemoFieldsets>
          <DemoFieldset title="fit">
            <DemoCheckbox
              label="actice"
              checkedValue={isFit}
              onChange={setIsFit}
            />
          </DemoFieldset>
        </DemoFieldsets>
      </div>
      <ExampleIconDark modifiedClasses={modifiedClasses} />
      <ExampleIconLight modifiedClasses={modifiedClasses} />
      <ExampleIconColor modifiedClasses={modifiedClasses} />
    </div>
  )
}

function ExampleIconDark({ modifiedClasses }: { modifiedClasses?: string }) {
  return (
    <>
      <div className="demo-box">
        {[...Array(10)].map((_, index) => (
          <FiSunrise
            key={index}
            className={clsx(
              "icon",
              index === 0 && "is-dark",
              index !== 0 && `is-dark-${index}`,
              modifiedClasses
            )}
          />
        ))}
      </div>
    </>
  )
}

function ExampleIconLight({ modifiedClasses }: { modifiedClasses?: string }) {
  return (
    <>
      <div className="demo-box" style={{ background: "#0f172a" }}>
        {[...Array(10)].map((_, index) => (
          <FiSunset
            key={index}
            className={clsx(
              "icon",
              index === 0 && "is-light",
              index !== 0 && `is-light-${index}`,
              modifiedClasses
            )}
          />
        ))}
      </div>
    </>
  )
}

function ExampleIconColor({ modifiedClasses }: { modifiedClasses?: string }) {
  return (
    <>
      <div className="demo-box">
        <FiHeart className={clsx("icon", modifiedClasses)} />
        <FiHeart className={clsx("icon is-tx-1", modifiedClasses)} />
        <FiHeart className={clsx("icon is-tx-2", modifiedClasses)} />
        <FiHeart className={clsx("icon is-tx-3", modifiedClasses)} />
        <FiHeart className={clsx("icon is-bd-1", modifiedClasses)} />
        <FiHeart className={clsx("icon is-bd-2", modifiedClasses)} />
        <FiHeart className={clsx("icon is-lk", modifiedClasses)} />
        <span style={{ background: "var(--theme-lk)" }}>
          <FiHeart className={clsx("icon is-lk-tx", modifiedClasses)} />
        </span>
      </div>
      <div className="demo-box">
        <FiUser className={clsx("icon", modifiedClasses)} />
        <FiCheckSquare className={clsx("icon is-primary", modifiedClasses)} />
        <FiCheckCircle className={clsx("icon is-secondary", modifiedClasses)} />
        <FiAlertCircle className={clsx("icon is-info", modifiedClasses)} />
        <FiSave className={clsx("icon is-success", modifiedClasses)} />
        <FiAlertTriangle className={clsx("icon is-warning", modifiedClasses)} />
        <FiTrash2 className={clsx("icon is-danger", modifiedClasses)} />
      </div>
      <div className="demo-box">
        <FiUser
          className={clsx("icon", modifiedClasses)}
          aria-disabled="true"
        />
        <FiCheckSquare
          className={clsx("icon is-primary", modifiedClasses)}
          aria-disabled="true"
        />
        <FiCheckCircle
          className={clsx("icon is-secondary", modifiedClasses)}
          aria-disabled="true"
        />
        <FiAlertCircle
          className={clsx("icon is-info", modifiedClasses)}
          aria-disabled="true"
        />
        <FiSave
          className={clsx("icon is-success", modifiedClasses)}
          aria-disabled="true"
        />
        <FiAlertTriangle
          className={clsx("icon is-warning", modifiedClasses)}
          aria-disabled="true"
        />
        <FiTrash2
          className={clsx("icon is-danger", modifiedClasses)}
          aria-disabled="true"
        />
      </div>
    </>
  )
}
