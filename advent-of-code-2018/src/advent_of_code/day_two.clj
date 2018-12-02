(ns advent-of-code.day-two
  (:require [advent-of-code.core :as core]
            [clojure.math.combinatorics :as combo]))

(defn count-2-and-3-occurencies [map-list]
  (loop [new-list map-list
         twos 0
         threes 0]
    (let [head (first new-list)
          twos (if (some #(= 2 %) head) (+ 1 twos) twos)
          threes (if (some #(= 3 %) head) (+ 1 threes) threes)]
      (if (empty? (rest new-list))
        (* twos threes)
        (recur (rest new-list) twos threes)))))

(defn get-possible-combinations [list]
  (combo/combinations list 2))

(defn find-single-diff-position [str1 str2]
  (loop [difference-found-at -1
         position 0]
    (let [last-pos? (= position (- (count str1) 1))]
      (if (= (get str1 position) (get str2 position))
        (if last-pos?
          difference-found-at
          (recur difference-found-at (inc position)))
        (cond (> difference-found-at -1) nil
              last-pos? difference-found-at
              :else (recur position (inc position)))))))

(defn get-correct-id [pair]
  (let [first-word (first pair)
        second-word (second pair)
        difference-index (find-single-diff-position first-word second-word)]
    (when difference-index
      (str (subs first-word 0 difference-index)
           (subs first-word (+ 1 difference-index))))))

(defn solve-first-problem [input]
  (->> input
       core/parse-input
       (map frequencies)
       (map vals)
       count-2-and-3-occurencies))

(defn solve-second-problem [input]
  (->> input
       core/parse-input
       get-possible-combinations
       (some get-correct-id)))
