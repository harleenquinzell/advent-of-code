(ns advent-of-code.core
  (:require [clojure.string :as str]))

(defn input->string-list [file-path]
  (-> file-path
      slurp
      str/split-lines))

(defn ->numbers [list]
  (->> list
       (map (fn [line] (read-string line)))))

(defn file->number-list [file-path]
  (->> file-path
       input->string-list
       ->numbers))
