(ns advent-of-code.core
  (:require [clojure.string :as str]))

(defn read-input [file-path]
  (-> file-path
      slurp
      str/split-lines))

(defn parse-list [list]
  (->> list
       (map (fn [line] (read-string line)))))

(defn file->list [file-path]
  (->> file-path
       read-input
       parse-list))

